const form = document.querySelector('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const tel_num = document.getElementById('tel-num')
const submit = document.getElementById('submit')
const userCountDisplay = document.getElementById('display')

const STORED_KEY = "user"

const PHONE = /^(?:\+251|0)9\d{8}$/;
const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

userCount()


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const error_display = document.getElementById("error-display");
    error_display.textContent = "";

    if (name.value.trim().length < 2) {
        error_display.textContent = "Enter your full name!";
        return;
    }
    if (!EMAIL.test(email.value)) {
        error_display.textContent = "Enter correct Email!";
        return;
    }
    if (!PHONE.test(tel_num.value)) {
        error_display.textContent = "Enter a valid phone!";
        return;
    }
    const newUser = {name, email, tel_num};

    let users = JSON.parse(localStorage.getItem(STORED_KEY)) || [];
    users.push(newUser);
    localStorage.setItem(STORED_KEY, JSON.stringify(users));

    form.reset();
    userCount();
    alert("Saved successfully!");
})
function userCount() {
    const users = JSON.parse(localStorage.getItem(STORED_KEY)) || [];
    userCountDisplay.textContent = `Total signed up: ${users.length}`;
}




