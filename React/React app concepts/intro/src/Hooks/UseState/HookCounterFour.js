import React, {useState} from 'react'

function HookCounterFour() {
    const [items ,setItems] = useState([])

    const addItem = () => {
        setItems([...items,{ // with the help of spread operator we first copy the list and then append it , in this way we are not overwriting the original array
            id : items.length,
            // Math.randon gives value like 0.656464 , 0.44989 all values below one and in points
            // so we mulitpy with it by 10 to make it greater than 1 
            // then we use Math.floor to avoid decimal values and add 1 to avoid 0 value
            // value : Math.floor(Math.random()*10) +1 
            // we can use tilde ~~ instead of Math.floor
            value : ~~(Math.random()*10) +1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        {
            items.map(item => <li key={item.id}>{item.value}</li>)
        }
    </div>
  )
}

export default HookCounterFour

// In classes , the state is always an object
// but with useState hook , the state doesn't have to be object. it can be boolean string array number object
