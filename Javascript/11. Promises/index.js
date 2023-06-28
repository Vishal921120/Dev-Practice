const cart = ["shoes", "pants"];

// issue with callback :- Inversion of control.
// createOreder(cart, function(orderId){
//     proceedToPayment(orderId);
// })

// so whats the solution for above problem :- Promise

// const promise = createOrder(cart); // Note this code is for understanding purpose , this is not a real promise
// Now above line will return a promise in the form of empty object
//{data : undefined} like this, and then start executing futher codes
// once the createOrder finished its api call, it automatically changed the
//object as {data : orderDetails}

// now we can attach(remember we are not passing like we did above in case of callbacks) our proceedToPayment to our promise
// once our data is filled our proceedToPayment will automatically called.
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })


// Real example of promise.

const git_API = "https://github.com/users/akshaymarch7";

// In js we have fetch, which returns a promise;

const user = fetch(git_API); // returns promise.
// console.log(user);
// Promise can have only three states :- rejected, pending , fullfilled.
// user.then(function(data){
//     console.log(data);
// })


// what is promise : - promise object is a placeholder for a certain period of time 
// until we recieved the value from a asyncronous operations. Or we can say its a container
// for a future value.

// definiton from mdn :- promise is a an object representing the eventual completion or failure
// of an asynchronous operation.

// Now how to solve a callback hell issue
api.createOrder(cart, function(orderID){

    api.proceedToPayment(orederID, function(paymentInfo){

        api.showOrderSummary(paymentInfo,function(){
            
            api.updateWallet();
        })
    })
})

// using promise chaining.

createOrder(cart)
  .then(orederID => proceedToPayment(orederID))
  .then(paymentInfo => showOrderSummary(paymentInfo))
  .then(paymentInfo => updateWallet(paymentInfo));
