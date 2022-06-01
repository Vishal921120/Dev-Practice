import React, { Component } from 'react'

// To see error just enclose all tags inside this ErrorBoundary component like
{/* <ErrorBoundary>
   <Hero heroName= "Batman"/>
   <Hero heroName= "Superman"/>
    <Hero heroName= "joker"/> // error will trigger because of this joker prop
</ErrorBoundary> */}

// So on the screen we will see :- something went wrong (defined in render method)

// Now this is not a good way. let consider a e-commerce website now because of error in one product
// we shouldn't hide our other component which have no error. So solving this problem 
// enclose every single element with errowboundary tag like below
    //   <ErrorBoundary>
    //     <Hero heroName= "Batman"/>
    //   </ErrorBoundary>
    //   <ErrorBoundary>
    //     <Hero heroName= "Superman"/>
    //   </ErrorBoundary>
    //   <ErrorBoundary>
    //     <Hero heroName= "joker"/>
    //   </ErrorBoundary>

// now our batman and superman component will show and for joker we see Something went wrong

 class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }
    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error,info){
        console.log(error) //this will also print by react so we will see same output 2 times
        console.log(info)
    }
  render() {
    if(this.state.hasError){
        return <h1>something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary