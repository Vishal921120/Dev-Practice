import React from 'react'
// javascript codes are written inside culry brackets inside jsx
// map returns new array with our desired changes

function NameList() {
    const names = ["Vishal","Vikas","Dakash","Raavi"]
    // second parameter in map is index of the array which helps us to give unique value to key
    const nameList = names.map((name,index) =><h2 key={index}>{index} {name}</h2> ) 
    // Index as key have a serious problem , for understanding this go = https://codepen.io/gopinav/pen/gQpepq and codeevolution video 19 from 7th min
  return (
    <div>
        {nameList}
        {/* To make below code more clean , use this map fn outside return and then just use its varible name  */}
        {/* {
            names.map(name =>
                <h2>{name}</h2>
            )
        } */}
        {/* This below code is very bad way to return a list , use map method do the same work */}
        {/* <h2>{name[0]}</h2>
        <h2>{name[1]}</h2>
        <h2>{name[2]}</h2>
        <h2>{name[3]}</h2> */}
    </div>
  )
}

export default NameList

// When to use Index as key 
//1. The items in your list do not have a unique id.
//2. The list is a static and will not change.
//3. The list will never be reordered or filtered.

// if for all three points the answer is yes then you can use index as key safely
// otherwise you can download npm packages for creating unique keys.