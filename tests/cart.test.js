const {calculateTotal, applyDiscount, generateReceipt} = require("../cart.js")

describe("Calculate Total", ()=>{
    test("Calculates total with normal cart", () =>{
        expect(calculateTotal([{price:1},{price:2},{price:3}])).toBe(6)
    })
    test("Calculates total with small cart", () =>{
        expect(calculateTotal([{price:1}])).toBe(1)
    })
    test("Gives 0 for empty cart", () =>{
        expect(calculateTotal([])).toBe(0)
    })
})
describe("Applying Discount", ()=>{
    test("Apply normal discount", () =>{
        expect(applyDiscount(10, 0.2)).toBe(8)
    })
    test("Buy one get nothing", () =>{
        expect(applyDiscount(10, 0)).toBe(10)
    })
    test("5 finger discount", () =>{
        expect(applyDiscount(10, 1)).toBe(0)
    })
    test("Digital price tag", () =>{
        expect(applyDiscount(10, -1)).toBe(10)
    })
})

describe("Making Receipt", ()=>{
    test("Normal receipt", () =>{
        expect(generateReceipt([{ name: "Laptop", price: 1 },{ name: "Phone", price: 2 },{ name: "Headphones", price: 3 }], 6)).toBe("Items:\nLaptop: $1\nPhone: $2\nHeadphones: $3\nTotal: $6.00")
    })
    test("Small cart", () =>{
        expect(generateReceipt([{ name: "Laptop", price: 1 }], 1)).toBe("Items:\nLaptop: $1\nTotal: $1.00")
    })
    test("No cart", () =>{
        expect(generateReceipt([], 0)).toBe("Items:\nTotal: $0.00")
    })
})