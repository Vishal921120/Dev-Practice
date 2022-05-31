import React from 'react'
import './myStyle.css' // remeber to import your styles

function StyleSheet(props) {
  let className = props.primary ? 'primary' : '' // {/* <StyleSheet primary={true}/> */} getting props from here in App.js
  return (
    <div className={`${className} font-xl`}>StyleSheet</div> // using templet literals we can use more than one classes.
  )
}

export default StyleSheet