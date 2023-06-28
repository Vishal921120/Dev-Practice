// We know js is synchronous and single threaded langauge.
// So to make it asynchronous we can use call back functions.

// for ex - we want our 2nd console to be printed after 5 sec.
// console.log(1);
// console.log(2);
// console.log(3);

// to do so we can pass it inside a callback function, (a callback fn is passed as agrument)

console.log(1);

setTimeout(cb,5000);

function cb(){
    console.log(2);// we have passed this console in callback function and passed it to a setTimeout.
}

console.log(3);

// ex-2
// let take an example of ecomerrce webisite. where we a cart of products 

const cart = ["shoes", "pnats"];

// Now we have lot of api and we want that after creatiing order, then we should proceed
// to payment so we passed our api payment as a callback to create order so that it can run 
// after createOrder, similarly we want showorder summary later, then update wallet . 
// so passing this api as callback again and again makes codes lengthy in horizontal ,
// this structre is known as pyramid of doom. So we should avoid this callback hell.
api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(function(){
            
            api.updateWallet();
        })
    })
})

// we have given the control of our proceedtopayment after passing it as a callback to createOrder, 
// don't you think its very risky, what if our createorder has problem , then it might happen that
// proceedtopayment was never called , or it called twice , anything can happen because we have given
// full control to createOrder. So this is called Inversion of control, means we lost control.