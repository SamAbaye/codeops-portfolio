# Addis Delux — Restaurant Menu & Cart

A vanilla JavaScript restaurant menu app with search, category filtering, a shopping cart, and a checkout form with validation. Cart state persists across page reloads via `localStorage`.

## Features

- **Dynamic menu rendering** — dishes are loaded from `data/menu.json` and rendered as cards.
- **Live search** — filter dishes by name as you type.
- **Category filters** — view all, vegan, or main dishes via filter buttons.
- **Cart management** — add items, remove items, auto-updating subtotal, service charge, and total.
- **Persistent cart** — cart contents are saved to `localStorage` and restored on page load.
- **Checkout flow** — clicking checkout reveals a form; submitting validates all fields before placing the order.

## Project Structure

```
├── index.html
├── style.css
├── script.js
├── data/
│   └── menu.json
└── asset/
    └── pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png
```

## Setup

1. Clone or download the project files.
2. Make sure `data/menu.json` exists and contains an array of dish objects (see format below).
3. Serve the project with a local server (required for `fetch()` to work on `menu.json`):

   ```bash
   npx serve .
   # or
   python3 -m http.server
   ```

4. Open the served URL in your browser.

> Opening `index.html` directly via `file://` will break the `fetch("./data/menu.json")` call in most browsers due to CORS restrictions on local files.

## `menu.json` Format

Each dish should include at least:

```json
[
  {
    "id": 1,
    "name": "Spicy Tofu",
    "price": 10,
    "description": "Pan-fried tofu in a spicy peanut sauce.",
    "category": "vegan",
    "spicy": true
  }
]
```

| Field         | Type      | Description                                  |
|---------------|-----------|-----------------------------------------------|
| `id`          | number    | Unique identifier for the dish               |
| `name`        | string    | Dish name                                    |
| `price`       | number    | Price in USD                                 |
| `description` | string    | Short description shown on the card          |
| `category`    | string    | `"vegan"` or `"main"` — used by filter buttons |
| `spicy`       | boolean   | Whether the dish is spicy                    |

## Required HTML Elements (by ID)

The script queries these IDs directly, so your `index.html` must include matching elements:

| ID / Selector         | Purpose                                  |
|------------------------|-------------------------------------------|
| `#searchForm`          | Wraps the search input                   |
| `#searchInput`         | Search text field                        |
| `#cards`               | Container the menu cards render into     |
| `#cart-items`          | List of items currently in the cart      |
| `#subtotal-amount`     | Displays cart subtotal                   |
| `#service-charge-amount` | Displays service charge amount         |
| `#cart-total`          | Displays final total (must contain a `<strong>`) |
| `#checkout`            | "Proceed to Checkout" button             |
| `#simple-cart`         | Cart wrapper element (aside)             |
| `#checkoutFormWrapper` | Wraps the checkout form (shown/hidden)   |
| `#error_display`       | Shows validation error messages          |
| `#place_order`         | Submit button inside the checkout form   |
| `.filter`               | Filter buttons, each needs `data-filter="all" \| "vegan" \| "main"` |
| `form` (first on page) | The checkout form itself, with `fullName`, `email`, `address`, `city`, `phone` fields |

## Validation Rules

The checkout form validates:

- **Full name** — at least 2 characters
- **Email** — must match a standard email pattern
- **Address** — at least 2 characters
- **City** — at least 3 characters
- **Phone** — Ethiopian format only: `+2519XXXXXXXX` or `09XXXXXXXX`

Validation stops at the first failing field and displays its message in `#error_display`.

## Known Limitations / Next Steps

- No backend — orders are only logged to the console and confirmed via `alert()`.
- No payment processing (would need a provider like Stripe or Chapa for real transactions).
- Quantity increment/decrement per cart item isn't implemented yet (only add and remove).
- No loading/error UI state if `menu.json` fails to fetch beyond a `console.log`.

## License

None.
