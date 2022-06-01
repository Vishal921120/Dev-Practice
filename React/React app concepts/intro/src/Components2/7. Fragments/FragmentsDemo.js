import React, { Component } from 'react'

export class FragmentsDemo extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Fragements Demo</h1>
                <p>Now using React.Fragement when we inspect we will not find this tag anywhere
                </p>
            </React.Fragment>
            //   <div>
            //       <h1>Fragements Demo</h1>
            //       <p>This is not a good way of enclosing different tag in a div 
            //           <br/>As when we see in inspect we found this div which is actually of no use for us
            //           <br/>Because our purpose was only to enclose our div so to avoid using div react provides
            //           <br/> its Fragements for enclosing purpose.
            //       </p>
            //   </div>
        )
    }
}

export default FragmentsDemo