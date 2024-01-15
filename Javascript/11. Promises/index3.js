// Chaining


const cart = ["shoes", "pants"];

// Always return the data in every .then so that next promise can use that.
createOrder(cart)
  .then(function(orderId){
    console.log(orderId);
    return orderId;
  })
  .then(function(orderId){
    return proceedToPay(orderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  .catch(function (err){ // This catch will run if any one of the above promise gives error. so only single catch is required for all promises.
    console.log(err.message); 
  })

// Now we can see if there is error in any chain above the catch , then no further promise will work, our code will directly jump to the last catch .
// but what if we want some promise to run even after the error in chaninig. 
// Put those promise below .catch and they will be run even getting an error in the code.
// like below.
// createOrder(cart)
//   .then(function(orderId){
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (err){
//     console.log(err.message); 
//   })
//   .then(function(orderId){
//     return proceedToPay(orderId);
//   })
//   .then(function(paymentInfo){
//     console.log(paymentInfo);
//   })


function createOrder(cart){

    const pr = new Promise(function(resolve, reject){

        if(!validateCart(cart)){
            const err = new Error("cart isn't valid");
            reject(err);
        }

        const orderId = "1244"
        if(orderId){
            // creating a fake delay.
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    })

    return pr;
}

function proceedToPay(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful")
    })
}

function validateCart(cart){
    return true;
}
