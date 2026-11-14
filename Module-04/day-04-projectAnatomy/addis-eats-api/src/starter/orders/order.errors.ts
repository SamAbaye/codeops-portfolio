

function OrderNotFoundError(orderId: string): Error {
    return new Error(`Order with id ${orderId} not found`);
}

function PaymentDeclinedError(phone: string, reason: string): Error {
    return new Error('Payment Declined');
}

export { OrderNotFoundError, PaymentDeclinedError };