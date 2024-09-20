/*  Task 1 
   I created the inventory array, this array stores information about all the product object (coffee available) in the system.
   This array contains product objects with properties for name, price, and quantity. 
*/
let inventory = [
    {name: 'Americano', price: 5, quantity: 50},
    {name: 'Cappuccino', price: 7, quantity: 100},
    {name: 'Caffè macchiato', price: 8, quantity: 70},
    {name: 'Latte', price: 6, quantity: 65},
    {name: 'Espresso', price: 4, quantity: 85}
];

/* Task 2 
   I initialized the second array of this system. The orders array will be responsible for storing customers order, including
   the customer name, items ordered, and order status.
*/
let orders = [];

/* Task 3
   In this task I created the placeOrderFunction
   This function checks if products are in stock, if they are it adds a new order to the orders array 
   If there isn't enough stock for any item, it prints out an error message and the order doesn't go through
*/

function placeOrder(customerName, orderedItems) {
    let canPlaceOrder = orderedItems.every(item => {
        let product = inventory.find(p => p.name === item.name);
        return product && product.quantity >= item.quantity;
    });
    if (!canPlaceOrder) {
        console.error('Not enough stock to place the order.');
        return;
    }
    orderedItems.forEach(item => {
        let product = inventory.find(p => p.name === item.name);
        product.quantity -= item.quantity;
    });
    let newOrder = {
        customerName: customerName,
        items: orderedItems,
        status: 'Pending'
    };
    orders.push(newOrder);
    console.log('Order placed successfully');
}

/* Task 4 
   In this task I created the placeOrderFunction
   This function calculates the total cost of what a customer ordered by adding up the price of each ordered product.

*/

function calculateOrderTotal(order) {
    let totalPrice = order.items.reduce((sum, item) => {
        let product = inventory.find(p => p.name === item.name);
        return sum + (product.price * item.quantity);
    }, 0);
    return totalPrice;
}