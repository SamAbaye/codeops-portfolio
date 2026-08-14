import {toETB, withVat, discountBy} from "./pricing.js";

const subtotal = (...prices) => {
  return prices.reduce((total, current) => (total += current), 0);
};


export function makeReceiptMaker() {
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