let arr = [1,2,3]; // let say arr pointing 10k in heap
// let arr2 = arr; // this will also start pointing 10k 

// arr2.push(4); // we have only pushed 4 in arr2 
// but when we print it shows 4 in both arr . why??
//because arr2 was pointing the same address of original arr which is made in heap
// so when we changed arr2 , actually it changed the original arr present at the same adress
// and we know changes in heap presist .
// console.log(arr); //output [ 1, 2, 3, 4 ]
// console.log(arr2); //output [ 1, 2, 3, 4 ]

//now solution for the above problem = use spread opreator

// console.log(...arr); // these 3 dots are spread opreator 
// output 1 2 3 = basically its gives list of outputs from the array.

//solution
let arr2 = [...arr];
arr2.push(4);
console.log(arr); //output [ 1, 2, 3]
console.log(arr2);  //output [ 1, 2, 3, 4] //problem solved.

// Read your notes for spread opreator in objects.

