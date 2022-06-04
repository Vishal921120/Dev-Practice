import React, {useState , useEffect} from 'react'

function HookCounter2() {
    const [count ,setCount] = useState(0);
    const [name ,setName] = useState('');

    // For conditionally rendering we can pass a second parameter which is array
    // In this array we need to specify ethier prop or state we need to watch for.
    // so if only the specified prop or state in array changes then it will render only 
    useEffect(()=> {
        console.log('UseEffect - updating document title')
        document.title = `you clicked ${count}`
    },[count]) // second parameter is the array of values that the effect depends on


  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>clicked {count} times</button>
    </div>
  )
}

export default HookCounter2