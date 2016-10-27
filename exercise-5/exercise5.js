/*

    Author: Drew Easley
    Date: Oct 27, 2016

    Description: Write JavaScript that finds the object with OrderId 3
                 and changes the CustomerId to 1234
*/

//Fetch our orders (static array, but could easily be a DB/ Web Service call)
function fetchOrders() {
    return [
        { OrderId: 1, CustomerId: 7567 },
        { OrderId: 2, CustomerId: 7567 },
        { OrderId: 3, CustomerId: 5867 },
        { OrderId: 4, CustomerId: 9518 },
        { OrderId: 5, CustomerId: 1234 }
    ];
}

/*
  This function depends on the array index
  We will fetch that index in a moment
  Also, you can pass the optional oldCustomer index to validate we ahve the
  correct record
 */

function changeCustomer(orderList, orderIndex, newCustomer, oldCustomer=null) {

    //Check to see if we have the correct order
    if (oldCustomer) {
        if (orderList[orderIndex].CustomerId != oldCustomer) {
            throw "A correct orderIndex was not provided.";
        }
    }

    orderList[orderIndex].CustomerId = newCustomer;
    return orderList; //but JS passes by reference anyway :/
}

//METHOD 1: Just use loDash, it's simple and easy...
function changeCustomer_lodash(orderId, newCustomer, oldCustomer=null) {

    const _ = require("lodash");
    let orderList = fetchOrders();

    //LoDash can find our index quickly
    let orderIndex = _.findIndex(orderList, function(o)
        { return o.OrderId == orderId;} );

    //Did we find it?
    if (orderIndex >= 0) {
        return changeCustomer(orderList, orderIndex, newCustomer, oldCustomer);
    }

    //No, we didn't find it...
    throw "Order was not found";
}


//METHOD 2: Without lodash, a primiate for loop can help us
function changeCustomer_standard( orderId, newCustomer, oldCustomer=null) {

    let orderList = fetchOrders();

    for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].OrderId == orderId) {
            //return statement will abandon loop once order is found
            return changeCustomer(orderList, i, newCustomer, oldCustomer);
        }
    }
    throw "Order was not found";
}

//Testing:
/*eslint no-console: ["error", { allow: ["log"] }] */
console.log ("Original List");
console.log (fetchOrders());


console.log ("METHOD 1- Using LODASH");
console.log (changeCustomer_lodash(3,1234, 5867));

console.log("METHOD 2- Using standard JavaScript");
console.log (changeCustomer_standard(3,1234, 5867));
