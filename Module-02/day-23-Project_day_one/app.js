const img =
"./asset/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png";

// Search related DOM elements
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Filter buttons
const filterBtn = document.querySelectorAll(".filter");
const all = document.getElementById("all");
const vegan = document.getElementById("vegan");
const main = document.getElementById("main");

// Menu cards
const cardsContainer = document.getElementById("cards");

// Aside (cart)
const cart_items = document.getElementById("cart-items");
const sub_total = document.getElementById("sub-total");
const cart_total = document.getElementById("cart-total");
const checkOut = document.getElementById("checkout");
const cart = document.getElementById("simple-cart");
const form = document.getElementById("checkoutForm");
const SERVICE_CHARGE_RATE = 0.1;
const error_display = document.getElementById('error_display')
const placeOrderBtn = document.getElementById("place_order");

const state = {
cart: [],
dishes: [],
search: "",
};


// Loads data from json file
async function loadData() {
cardsContainer.innerText = "Loading Menu ...";

try {
    const data = await fetch("./data/menu.json");

    if (!data.ok) {
    throw new Error("Can not load Menu!");
    }
    state.dishes = await data.json();
    render();
} catch (error) {
    console.log(error);
}
}

// Rendering the menu with search
function renderMenu() {
    const search = state.search.toLowerCase();
    const displayed = state.dishes.filter((dish) =>
        dish.name.toLowerCase().includes(search),
    );

    cardsContainer.innerHTML = displayed
        .map(
        (dish) => `
            <div class="card" data-id="${dish.id}">
                <div class="menu-image" id="img">
                    <img src='${img}'>
                </div>
                <div class="card-body">
                    <div class="menu-name">
                        <li>
                            <span>${dish.name}</span>
                            <strong>$${dish.price}</strong>
                        </li>
                    </div>
                    <div>
                        <p class="bio">${dish.description}</p>
                        <button class="add-to-cart">Add To Cart</button>
                    </div>
                </div>
            </div>
            `,
        )
        .join(" ");
}

// Renders information like price, number of items, on the cart display 
function renderCart() {
        if (state.cart.length === 0) {
            cart_items.innerHTML = `<li class="empty">Your cart is empty</li>`;
        } else {
            cart_items.innerHTML = state.cart
            .map(
                (item) => `
                    <li data-id="${item.id}">
                        <span>${item.name} x${item.qty}</span>
                        <strong>$${(item.price * item.qty).toFixed(2)}</strong>
                        <button class="rm" aria-label="Remove ${item.name}">&times;</button>
                    </li>
                    `,
            )
            .join("");
        }

        const subtotal = subTotal();
        const serviceCharge = subtotal * SERVICE_CHARGE_RATE;
        const total = subtotal + serviceCharge;

        document.getElementById("subtotal-amount").textContent =
            `$${subtotal.toFixed(2)}`;
        document.getElementById("service-charge-amount").textContent =
            `$${serviceCharge.toFixed(2)}`;
        cart_total.querySelector("strong").textContent = `$${total.toFixed(2)}`;
}

// we use this function to render everything
function render() {
    renderMenu();
    renderCart();
}

// calculates the total price
function subTotal() {
        return state.cart.reduce((sum, i) => sum + i.qty * i.price, 0);
}

// saves our cart to the local storage
function save() {
        localStorage.setItem("addisDelux", JSON.stringify(state.cart));
}

// loads data on the state cart from our the localStorage
function load() {
        const savedData = localStorage.getItem("addisDelux");
        if (savedData) state.cart = JSON.parse(savedData);
}

// Adding to Carts
cardsContainer.addEventListener("click", (e) => {
        if (!e.target.matches(".add-to-cart")) return;

        const id = Number(e.target.closest(".card").dataset.id);
        const dish = state.dishes.find((d) => d.id === id);
        const line = state.cart.find((i) => i.id === id);

        if (!dish) return;

        if (line) {
            line.qty++;
        } else {
            state.cart.push({ ...dish, qty: 1 });
        }

        save();
        render();
});

// removing and adding carts
cart.addEventListener("click", (e) => {
        if (!e.target.matches(".rm")) return;
        const id = Number(e.target.closest("li").dataset.id);
        state.cart = state.cart.filter((i) => i.id !== id);

        save();
        render();
});

// Search event listener 
searchInput.addEventListener("input", (e) => {
        state.search = e.target.value;
        render();
});

// Checkout form and eventListener 
const PHONE = /^(?:\+251|0)9\d{8}$/;
const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    error_display.textContent = "";
    console.log(e.target.value)
    const fields = {
        fullName: form.fullName.value.trim(),
        email: form.email.value.trim(),
        address: form.address.value.trim(),
        city: form.city.value.trim(),
        phone: form.phone.value.trim(),
    };
    
    if (fields.fullName.length < 2) {
        error_display.textContent = "Enter your full name!";
        return;
    }
    if (!EMAIL.test(fields.email)) {
        error_display.textContent = "Enter correct Email!";
        return;
    }
    if (fields.address.length < 2) {
        error_display.textContent = "Enter a valid address!";
        return;
    }
    if (fields.city.length < 3) {
        error_display.textContent = "Enter a valid city!";
        return;
    }
    if (!PHONE.test(fields.phone)) {
        error_display.textContent = "Enter a valid phone number!";
        return;
    }
 
    // all checks passed
    console.log("Order valid:", fields);
    alert("Order placed successfully!");
    checkoutFormWrapper.style.display = "none";
    cart.style.display = ''
    checkOut.style.display = 'block'
    form.reset();
    state.cart = [];
    save();
    render();
});

// --- Checkout button ---

checkOut.addEventListener("click", () => {
    if (state.cart.length === 0) {
        alert("Your cart is empty — add items before checking out.");
        return;
    }
    checkoutFormWrapper.style.display = "block";
    cart.style.display = "none";
    checkOut.style.display = "none";
});

// Main filter event listener
filterBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const filteredValue = btn.dataset.filter
        state.dishes.forEach(dish => {
            if (filteredValue === "vegan") {
            veganDish();
            } else if (filteredValue === "main") {
            mainDish();
            } else if (filteredValue === "all") {
            render();
            }      
        });
    }) 
})

// for filtering main dishes
function mainDish(){
    const mainDish = state.dishes.filter((dish) => {
    return dish.spicy === true;
    });
    cardsContainer.innerHTML = "";
    cardsContainer.innerHTML = mainDish.map(
    (v) =>
        `
        <div class="card" data-id="${v.id}">
            <div class="menu-image" id="img">
                <img src='${img}'>
            </div>
                <div class="card-body">
                <div class="menu-name">
                    <li>
                        <span>${v.name}</span>
                        <strong>$${v.price}</strong>
                    </li>
                </div>
                <div>
                    <p class="bio">${v.description}</p>
                    <button class="add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>`,
    );
}

// for filtering vegan dishes
function veganDish(){
    const vegan = state.dishes.filter((dish) => {
    return dish.spicy === false;
    });
    cardsContainer.innerHTML = "";
    cardsContainer.innerHTML = vegan.map(
    (v) =>
        `
        <div class="card" data-id="${v.id}">
            <div class="menu-image" id="img">
                <img src='${img}'>
            </div>
                <div class="card-body">
                <div class="menu-name">
                    <li>
                        <span>${v.name}</span>
                        <strong>$${v.price}</strong>
                    </li>
                </div>
                <div>
                    <p class="bio">${v.description}</p>
                    <button class="add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>`,
    );
}
async function init() {
    load();
    await loadData(); 
}

init();
