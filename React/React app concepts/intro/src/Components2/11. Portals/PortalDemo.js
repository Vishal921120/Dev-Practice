import React from 'react'
// We know all our components are rendered in public-> index.html on div id root
// with portals we can make another div and add that component on different div
// First import reactdom
import ReactDOM from 'react-dom'

// ReactDom.creatPortal accepts two parameter
// first the jsx, string anything which we want to render
// second parameter is loctaion on which to render.

function PortalDemo() {
  return ReactDOM.createPortal (
    <div>PortalDemo</div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo