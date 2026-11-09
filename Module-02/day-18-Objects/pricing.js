
export let withVat = (n) => n * 1.15;


export const toETB = (n) => `${n.toFixed(2)} ETB`;

export const discountBy = (rate) => {
  return (price) => {
    return price * (1 - rate);
  };
};

