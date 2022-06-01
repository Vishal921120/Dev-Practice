import React from 'react'
// As we know pure components only work in class components not in functional components.
// so for function components we have higher order component React.memo to avoid re-renders if there is no change in props/state
// We use React.memo while exporting.

function MemoComp() {
    console.log('Rendering Memo Component')
  return (
    <div>MemoComp</div>
  )
}

export default React.memo(MemoComp) // in console only parent component is re-render again and again as 
// it was not a pure component