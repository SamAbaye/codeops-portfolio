"use strict";

/**
 * TODO: Write subtotal(...prices) using a reduce callback.
 */
const subtotal = (...prices) => {
  return prices.reduce((total, current) => (total += current), 0)
};

/**
 * TODO: Write discountBy(rate) as a factory returning an arrow function.
 */
const discountBy = (rate) => {
  return (price) => {
    return price * (1 - rate)
  }
};

/**
 * TODO: Add withVat as a small pure helper.
 * It should add 15% VAT to a given amount [2, 3].
 */
const withVat = (n) => n * (1.15)

/**
 * TODO: Add toETB as a small pure helper.
 * It should format a number to 2 decimal places followed by " ETB" [2, 3].
 */
const toETB = (n) => `${n.toFixed(2)} ETB`

/**
 * TODO: Build makeReceiptMaker() with a private order number.
 * This function uses a closure to maintain the state of orderNo across calls [4, 5].
 * Inside, it should pre-build a 10% member discount function using discountBy(0.10) [5].
 */
function makeReceiptMaker() {
  let orderNo = 0; // Private state [4]
  const memberOff = discountBy(0.1);

  return function (...items) {
    // 1. Increment orderNo [5]
    orderNo++
    // 2. Calculate subtotal of items [5]
    const gross = subtotal(...items)
    // 3. Compose: apply discount, then VAT [5]
    const final = withVat(memberOff(gross))
    // 4. Format and return receipt string (e.g., "#1: 538.20 ETB") [5]
    return `${orderNo}: ${toETB(final)}`
  };
}
const receipt = makeReceiptMaker()
// Almaz orders Doro Wat (220), Tibs (180), and Shiro (120)
console.log(receipt(220, 180, 120));

// Dawit orders Firfir (140) and Buna (60)
console.log(receipt(140, 60));

// Export for run.js
if (typeof module !== "undefined") {
  module.exports = { subtotal, discountBy, withVat, toETB, makeReceiptMaker };
}
