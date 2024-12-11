import { createItem } from "./services/item.js"
import * as cartService from "./services/cart.js"
const myCart = []
const myWishList = []

console.log("Welcome to the your Shopee Cart")

const item1 = await createItem("hotwheels ferrari",20.99,1)
const item2 = await createItem("hotwheels porche",30.99,2)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)


// await cartService.deleteItem(myCart, item2.name)
await cartService.displayCart(myCart, item2)

// console.log(item2.subtotal())

await cartService.calculateTotal(myCart)