// Search related DOM elements
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById('searchBtn')
const searchResults = document.getElementById("searchResults"); // You will use onChanage to filter the menu cards based on the input

//The buttons for selecting to display only vigan and non vigan foods

const all = document.getElementById('all') // This is the default
const vegan = document.getElementById("vegan"); // This is to display the vegan ones 
const main = document.getElementById('main') // This is to display the non vegan ones

//The followings are the elements 
//These part is supposed to be done by js. you create the card and map the data feed the data to the html elements you create and render it. use similar attributes so you get similar result with the css.

const cardsContainer = document.getElementById('cards')
const addToCart = document.getElementsByClassName("add-to-cart");

// Aside (cart)

const cart_items = document.getElementById("cart-items"); // this is where you append lists of items which are added to the cart(u will use li with innerHtml of span(the item) and strong(the price))

const sub_total = document.getElementById('sub-total') // you will append to li elements with span of each having subtotal and servicecharge and strong of the amounst for each accordingly

const cart_total = document.getElementById('cart-total') // you will use this to display the final price

const checkOut = document.getElementById('checkout') // the final checkout




