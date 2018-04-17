import React, { Component, Fragment } from 'react'

class List extends Component {
   constructor(props) {
      super(props)
      this.state = {}
   }

   render() {
      return (
         <div style={{ marginTop: '30px' }}>

            {this.props.children.map((child, index) => {
               return <div key={index}>
                  {child}
               </div>
            })}


         </div>
      )
   }
}

export default List