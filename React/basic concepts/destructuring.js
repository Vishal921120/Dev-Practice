// destructuring is a convenient way of extracting data.
let arr = ["hi", "nye", "2", "4"];
// let a = arr[0];
// let b = arr[1];
// let c = arr[3];


// above 3 lines can be reduced in one using destructring
// let [a,b,c] = arr;
// console.log(a,b,c); //output hi nye 2

// for skipping any value use extra colon
// let [a,b,,c] = arr
// console.log(a,b,c); // output hi nye 4

// setting default value
// let [a, b, c , d,extra ="hello"] = arr;
// console.log(a,b,c,d,extra); //output hi nye 2 4 hello

//------------------------------------------------------------------------
// destructuring in Objects

// let obj = {
//     name : "kangh",
//     state : "delhi",
//     country : "india"
// }

// let name = obj.name;
// let state = obj["state"];
// let country = obj.country;

//above 3 lines can be destructured in 1 as

// let {name,state,country} = obj;

// for giving default value
// let {name,state,country,extra = "default value"} = obj;

//for changing the varibale name
// let {name:firstName,state,country} = obj;
// console.log(firstName, state, country);

//another example of object

let obj ={
    name : "kanj",
    add : {
        country : "india",
        state : {
            code: "dl",
            pin : "132121"
        }
    }
}

// for accessing code and also changing its name
let {add:{state:{code:newName}}} = obj
console.log(newName);

