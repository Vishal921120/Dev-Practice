const arr = [2,5,7,8];

//======================================map===============================================
function double(x){
    return 2*x;
}
function triple(x){
    return 3*x;
}
function binary(x){
    return x.toString(2);
}

// console.log(arr.map(binary)); //[ '10', '101', '111', '1000' ]
//or 
// console.log(arr.map(function binary(x){
//     return x.toString(2);
// }))
//or
// console.log(arr.map(x => x.toString(2)));

//========================================filter==============================================

const arr2 = [2,5,7,8];

function isOdd(x){
    // console.log(x%2) //0,1,1,0 in separate lines
    return x%2;
}
function greaterThan4(x){
    // console.log(x>4); // false , true,true,true in separate lines
    
    return x>4;
}

// console.log(arr.filter(isOdd)); //[ 5, 7 ]
// console.log(arr.filter(greaterThan4)); //[ 5, 7, 8 ]
// console.log(arr.filter(x => x>3));

//=====================================reduce===================================================

// find sum of array 
const arr3 = [33,85,99];

// using normal fn
function sum(arr3){
    sum =0;
    for(let i=0; i<arr3.length; i++ ){
        sum = sum + arr3[i];
    }
    return sum;
}

// console.log(sum(arr3));

// using reduce 
let output = arr3.reduce(function(accumulator,current){  // here current is same as arr3[i]
    accumulator = accumulator + current; // here accumulator is same as sum
    return accumulator;
},0) // the second argument in reduce is the initial value for accumulator
// console.log(output);

// find max of array

// using normal fn
function Max(arr3){
    let Max =0;
    for(let i=0; i<arr3.length; i++ ){
        if(Max < arr3[i]){
            Max = arr3[i];
        }
    }
    return Max;
}

console.log(Max(arr3));

// using reduce 

let op = arr3.reduce(function(acc, curr){
    if(acc < curr){
        acc = curr;
    }
    return acc;
},0)
console.log(op);

// Ques 
const users = [
    {firstName : "Vishal" , lastName:"Dabas" , age:22},
    {firstName : "Vikas" , lastName:"Dahiya" , age:44},
    {firstName : "Vikram" , lastName:"Panghal" , age:60},
    {firstName : "Vaishali" , lastName:"Rana" , age:22}
]


// output should be {22: 2, 44 : 1 , 60 : 1}
// basically we want the no. of people with the same age 

const res = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(res);

// Now we want the firstName of those people who has age less than 30

//Approach 1 using chaining of filter and map
const res2 = users.filter(x => x.age <30).map(x => x.firstName);
console.log(res2);

//Approach 2 using reduce
const res3 = users.reduce(function(acc,curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(res3);

