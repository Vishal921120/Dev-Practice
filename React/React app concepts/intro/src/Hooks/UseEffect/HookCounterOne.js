import React, {useState , useEffect} from 'react'

function HookCounterOne() {
    const [count ,setCount] = useState(0);
    const [name ,setName] = useState('');
    // just like useState , useEffect is also a function
 
    // When we specify useEffect we are basically requesting react to execute the function that is 
    // passed as an argument everytimes the component renders
    // so it runs both after the first render and after every update 
    useEffect(()=> {
        console.log('UseEffect - updating document title')
        document.title = `you clicked ${count}`
    })
    // Now this code has the same problem which we mentioned in ClassCounterOne 
    // So to overcome this problem check  HookCounter2


  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne