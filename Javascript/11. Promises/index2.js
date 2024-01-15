// creating Promise;

const cart = ["shoes", "pants"];

// this will call createOrder , which gives us a promise, once it is resolved ,
// then in promise we will have our orderId.
const promise = createOrder(cart); // orderID
console.log(promise);  // promise pending in case of delay.


// promise.then(function(orderId){
//     console.log(orderId);  // we get our orderId from promise. //1244
//     // proceedToPayment(orderId);
// })


// for creating promise, add new keyword and Promise constructor which 
// have a function with two parameter resolve and reject , and then return the promise later;
function createOrder(cart){

    const pr = new Promise(function(resolve, reject){
        // assume we get some error , so reject will help
        if(!validateCart(cart)){
            const err = new Error("cart isn't valid");
            reject(err);
        }

        // if we get orderid, then resolve will help
        const orderId = "1244"
        if(orderId){
            // creating a fake delay.
            setTimeout(function(){
                resolve(orderId);
            },5000);
            // resolve(orderId); // with this , our console at line 8 gives "promise fulfilled", but if we give fake delay , it logs "promise pending"
        }
    })

    return pr;
}

function validateCart(cart){
    return false; // if we change this to false, then in promise, reject will come into picture and we can see the error whatever we have provided 
    // in console as red line 
}

// Error handling.
// Now in the above code , we are not handling error in a good way, lets say this code is pushed to production, and when there is error,
// user will not able to see anything because error is showing on console. So to overcome this,attach catch with promise.

promise
  .then(function(orderId){
    console.log(orderId);
  })
  .catch(function (err){
    console.log(err.message); // like we can alert this message so that user can know the error.
  })