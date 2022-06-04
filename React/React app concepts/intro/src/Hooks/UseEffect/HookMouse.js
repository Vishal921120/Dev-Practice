import React , {useState,useEffect} from 'react'

function HookMouse() {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }
    
    // this will run like componentDidMount
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove' , logMousePosition)
    },[]) // for this example we don't need to depend on any thing so we define empty array 
  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse