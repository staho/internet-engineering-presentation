import React from 'react'
import './app.css'

class App extends React.Component {

    render() {
        return(
            <div className="hello-app">
                <h1>Welcome on react/webpack lecture!</h1>
                <div className="hello-box">
                    <h2>I'm in css styled div</h2>
                </div>
            </div>
        )
    }
}

export default App