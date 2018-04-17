import React, { Component } from 'react';
import Greeting from './components/Greeting'
import List from './components/List'
import WillItBoil from './components/WillItBoil'
import './App.css';

class App extends Component {
   state = {
      unleashed: false,
      childrenList: [],
      buttonText: 'SHOW ME MORE',
      message: '',
      scale: 'C',
      temperature: 0,
   }

   unleash = () => {
      this.setState({
         unleashed: !this.state.unleashed,
         buttonText: this.state.unleashed ? 'SHOW ME MORE' : 'SHOW ME LESS'
      })
   }

   componentWillMount = () => {
      console.log('▶️ App component will mount!')
   }

   componentDidMount() {
      const list = [
         <div>
            <input
               type="radio"
               name="scale"
               value="C"
               defaultChecked={'C' === this.state.scale}
               onChange={this.onRadioChanged} /> Celsius
         </div>,

         <div>
            <input
               type="radio"
               name="scale"
               value="F"
               defaultChecked={'F' === this.state.scale}
               onChange={this.onRadioChanged} /> Fahrenheit
         </div>,
         <input placeholder='insert value...' onChange={this.onInputChange} />
      ]

      this.setState({ childrenList: list })
   }

   onInputChange = event => {
      const input = event.target
      this.setState({ temperature: input.value }, () => {
         // console.log(this.state.temperature)
      })
   }

   onRadioChanged = event => {
      const radio = event.target
      this.setState({ scale: radio.value }, () => {
         console.log('Changed to ' + this.state.scale)
      })
   }


   render() {
      return (
         <div className="App">
            <Greeting />

            {this.state.unleashed &&
               <WillItBoil temperature={this.state.temperature} scale={this.state.scale} />
            }

            <button
               type='button'
               style={{ marginTop: '30px' }}
               onClick={this.unleash}
            >
               {this.state.buttonText}
            </button>

            {this.state.unleashed &&
               <List
                  children={this.state.childrenList}
                  temperature={this.state.temperature}
                  scale={this.state.scale}
               />
            }

         </div >
      );
   }
}

export default App;
