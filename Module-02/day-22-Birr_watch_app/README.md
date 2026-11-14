# Birr Watch

**Birr Watch** is a lightweight, responsive web application designed to track and convert currency exchange rates relative to the **Ethiopian Birr (ETB)** [Birr Watch](file:///index.html). It features a persistent watchlist backed by the browser's `localStorage` so your favorite currencies stay saved across page reloads.

## Features

* **Currency Conversion**: Quickly convert specific amounts from ETB to various global currencies.
* **Interactive Watchlist**: Keep track of key exchange rates at a glance.
* **Persistent Storage**: Automatically saves and loads your watchlist preferences using browser `localStorage`.
* **Clean Modern UI**: Styled entirely with a clean, responsive custom CSS layout.

## Project Structure

```text
├── index.html        # Main HTML layout
├── styles.css        # Custom presentation and layout rules
└── app.js            # Core application state, storage, and event logic
```

## Getting Started

1. **Clone or Download** the project files into your local development environment.
2. Ensure your `styles.css` and `app.js` are in the same directory as your `index.html`.
3. Open `index.html` directly in any modern web browser, or serve it using a local development server (such as the [Live Server](https://visualstudio.com) extension in [VS Code](https://visualstudio.com)).

## How It Works (Core Logic)

* **State Management (`app.js`)**: Holds the active configuration, rates, and current watchlist array in memory.
* **Persistence**:
  * `save()` flattens selected state variables into a JSON string via `JSON.stringify()` and stores them in `localStorage`.
  * `load()` pulls data via `localStorage.getItem()`, parses it back into an object, and merges it into the live app state using `Object.assign()`.
* **Dynamic Rendering**: Maps the active watchlist array to structured HTML fragments injected directly into the DOM, complete with event delegation for clean item removal.
