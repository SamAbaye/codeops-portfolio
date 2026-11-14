
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

const cardContainers = document.getElementById('cards');
const menuFilters = document.getElementById('menu-filters');
const allMenu = document.getElementById('all');
const VeganMenu = document.getElementById("vegan");
const mainMenu = document.getElementById("main");

const cart = document.getElementById('simple-cart');
const cartItems = document.getElementById("cart-items");
const subTotal = document.getElementById('sub-total');
const cartTotal = document.getElementById('cart-total')
const checkout = document.getElementById('checkout')

const checkoutFormWrapper = document.getElementById("checkoutFormWrapper");
const checkoutForm = document.getElementById("checkoutForm");
const errorDisplay = document.getElementById('error_display');


const state = {
    cart: [],
    dishes: [],
    search: ''
}

async function loadData(){
    try {
        const response = await fetch('./data/menu.json')
        if(!response.ok){
            throw new Error('Can not retrieve data')
        }
        const data = await response.json()
        state.dishes = data

        render()
        
    } catch (error) {
        console.log(error)
    }
}

function saved(){
    localStorage.setItem('addisDelux', JSON.stringify(state.cart))
    
}

function load(){
    const savedData = localStorage.getItem('addisDelux')
    if(savedData) state.cart = savedData
}

searchForm.addEventListener('input', () => {
    state.search  = searchInput.value;
    render()
})
function loadMenu(){
    const search = state.search.toLowerCase;
    const displayed = state.dishes.filter(dish => dish.name.toLowerCase().includes(search))
    
    if(!displayed) cardContainers.innerHTML = `There is no ${search}`;
        cardContainers.innerHTML = displayed
        .map((dish) => {
            `<div class="card" data-id="${dish.id}">
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
    `;
            })
            .join(" ");
            saved()
            load()
    
}

function render() {
    loadMenu()
}
async function init() {
            load()
    await loadData();
}
init()