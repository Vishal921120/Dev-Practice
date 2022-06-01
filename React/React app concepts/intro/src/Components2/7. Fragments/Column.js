import React from 'react'
// Fragments let you group list of children in a single tag without adding extra node to the dom.

function Column() {
  return (
      // using div here we found two warning in console
     //   1. <td> cannot appear as a child of <div>, which is in our column file.
    //   2. <div> cannot appear as a child of <tr>, this waring is bcz of table file bcz we are making it a children
    // of table row i.e. tr in table file.
    // <div>
    //     <td>Name</td>
    //     <td>Vishal</td>
    // </div>
    // use React.Fragments instead of div
    <React.Fragment>
        <td>Name</td>
        <td>Vishal</td>
    </React.Fragment>
    // we can also pass key attributes to react fragments
    // Also there is one shortcut instead of using React.Fragment we can use empty opening and closing tag
    // like <> </> but we have here one limitation that we cannot pass key attribute in it.
  )
}

export default Column