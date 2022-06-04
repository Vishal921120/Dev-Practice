import React ,{useState} from 'react'

// when dealing with objects or arrays, always make sure to spread your state variable and then 
// call thes setter function

function HookCounterThree() {
    const [name , setName] = useState({firstName : '', lastName : ''}) //a state variable can be a number boolean object string array.
  return (
    <form>
        {/* <input type='text' value={name.firstName} onChange={e => setName({firstName : e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e => setName({lastName : e.target.value})}/>
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2> */}
        {/* there is problem in above code. When we enter firstname and then we enter lastname , so we lost our firstname */}
        {/* So basically when we enter in firstName we lost our lastName and vice versa */}
        {/* Reason Behind it = The setter function provider by the useState hook doesn't automatically merge and update objects
        You have to maually merge it yourself and then pass the value to setter function . Like using spread operator we did below ...name
        ...name this will first make the copy of name and then change its state  */}

        <input type='text' value={name.firstName} onChange={e => setName({...name , firstName : e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e => setName({...name , lastName : e.target.value})}/>
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterThree