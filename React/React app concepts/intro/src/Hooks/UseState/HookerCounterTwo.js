import React  , {useState} from 'react'

function HookerCounterTwo() {
    const initialCount =0
    const [count , setCount] = useState(initialCount)

    // This will only icrease it by one
    // const incrementFive = () => {
    //     for(let i=0 ; i<5 ; i++ ){
    //         setCount(count + 1)
    //     }
    // }

    const incrementFive = () => {
            for(let i=0 ; i<5 ; i++ ){
                setCount(prevCount => prevCount + 1)
            }
        }

  return (
    <div>
        Count : {count}
        {/* Below method of counter is unsafe and we should never use it like this way */}
        {/* <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button> */}
        
        {/* New state value depends on the previos state value , you can pass the function to the setter function */}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookerCounterTwo