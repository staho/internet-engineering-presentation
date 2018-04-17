import React, { Component } from 'react'
import elmo from '../elmo.gif'

const checkBoiling = (temperature, scale) => {
   if (scale === 'C') {
      return temperature >= 100 ? true : false
   }
   else if (scale === 'F') {
      return temperature >= 212 ? true : false
   }
}

class WillItBoil extends Component {
   state = {
      willBoil: false,
      temperature: null,
      scale: null
   }


   static getDerivedStateFromProps = (props, currentState) => {
      if (currentState.temperature !== props.temperature || currentState.scale !== props.scale) {
         return {
            temperature: props.temperature,
            scale: props.scale,
            willBoil: checkBoiling(props.temperature, props.scale)
         }
      }

      return null
   }


   componentWillUnmount = () => {
      console.log('⏏️ WillItBoil component will be unmounted!')
   }


   render() {
      const style = {
         backgroundColor: this.state.willBoil ? '#000' : 'lightgray',
         color: this.state.willBoil ? '#fff' : '#000',
         fontSize: this.state.willBoil ? '30px' : '20px',
         display: 'flex',
         justifyContent: 'center',
         alignContent: 'center',
         flexDirection: 'column',
         height: '100px',
         marginTop: '30px',
         backgroundImage: this.state.willBoil ? `url(${elmo})` : null,
         backgroundRepeat: 'repeat-y',
         backgroundPosition: 'center',
      }

      return (
         <div style={style}>

            {this.state.temperature ?
               (this.state.willBoil ? '🔥 IT WILL BOIL 🔥' : 'It will NOT boil 💧')
               : 'Provide temperature value...'
            }

         </div>
      )
   }
}

export default WillItBoil