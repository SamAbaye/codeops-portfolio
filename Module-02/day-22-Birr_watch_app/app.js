const state = {
    base: "ETB",
    rates: {}, // filled by the API
    watchlist: [], // e.g. ["USD","KES"]
    amount: 100,
    currency: "USD",
};

const currency = document.getElementById('currency')
const status = document.getElementById('status')
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const result = document.getElementById('result')
const watchDisplay = document.getElementById('watchlist')
const addbtn = document.getElementById('watch')

const STORED_KEY = "forex";
const API = "https://open.er-api.com/v6/latest/ETB";

async function fetchRates(){
    status.textContent = 'Loading Rates ...'
    try {
        const result = await fetch(API);
        if(!result.ok){
            status.textContent = result.status
        }
        const data = await result.json()
        state.rates = data.rates
        keyRender();
        status.textContent = "";
    } catch (error) {
        status.textContent = `1error ${error}`
    }
}

function keyRender(){
    const keys = Object.keys(state.rates);
    keys.map((key) => {
        const options = document.createElement("option");
        options.textContent = key;
        currency.appendChild(options)
    });
    
    currency.value = state.currency;
    renderWatchList();
}


form.addEventListener('submit', (e) => {

    e.preventDefault()
    const amt = Number(amount.value)

    if(!amt || amt <= 0 ){
        result.textContent = 'Please enter a valid number!'
        return;
    }

    const current = currency.value
    const rate = state.rates[`${current}`];
    const rateCal = (amt * rate).toFixed(2);
    result.textContent = `${amt} ETB = ${rateCal} ${current}`
    
})

addbtn.addEventListener("click", () => {
    const add = currency.value
    if(state.watchlist.includes(add)) return;
    state.watchlist.push(add)
    save()
    renderWatchList()
});

function renderWatchList(){
    if (!state.watchlist || state.watchlist.length === 0) {
        watchDisplay.innerHTML = "<li>No currency to display yet!<!li>";
        return;
    }
    watchDisplay.innerHTML = state.watchlist.map((i) => {
        const rate = state.rates[i];
        return `<li data-del="${i}">1 ETB = ${rate} ${i}
                <button class="remove">Del</button></li>`
    }).join('')
}

watchlist.addEventListener('click', (e) => {
    
    if(!e.target.classList.contains('remove')) return;
    const del = e.target.closest('li').dataset.del;
    state.watchlist = state.watchlist.filter(r => r !== del);
    save();
    renderWatchList();
})

function save() {
    localStorage.setItem(STORED_KEY, JSON.stringify({
        watchlist: state.watchlist,
        currency: state.currency,
        }),
    );
}
function load() {
    const saved = localStorage.getItem(STORED_KEY);
    if (saved) Object.assign(state, JSON.parse(saved));
}

async function launcher() {
    load()
    await fetchRates()
    keyRender()
}

launcher()