const prices = [10.50, 20.99, 30.15, 40.99];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//     return total + price;
// })

const total = prices.reduce((total, price) => total + price)
prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})