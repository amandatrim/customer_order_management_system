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
    // I made use of the reduce method to find the sum of each order price
    let totalPrice = order.items.reduce((sum, item) => {
        let product = inventory.find(p => p.name === item.name);
        return sum + (product.price * item.quantity);
    }, 0);
    return totalPrice;
}

/* Task 5 
   In this task I created the completeOrderFunction
   This function first finds an order using the customers name then marks the order as complete 

*/

function completeOrder(customerName) {
    // Code to find an order using the users name
    let order = orders.find(o => o.customerName === customerName);
    if (!order) {
        console.error('Order was not found.');
        return;
    }
    // Changes the order status from pending to completed 
    order.status = 'Completed';
    console.log(`Order for ${customerName} is now completed.`);
}

/* Task 6 
   In this task I created the checkPendingOrder function
   This function logs out the details of all the orders that have the status of pending
*/

// Task 6: Create checkPendingOrders function
// This function logs the details of all orders that are still pending
function checkPendingOrders() {

    // it uses a for each loop to iterate over each order in the order array to find which ones are still pending
    orders.forEach(order => {
        if (order.status === 'Pending') {
            console.log(`Pending Order for ${order.customerName}:`, order);
        }
    });
}
