import React, { Component, } from 'react'
import './App.css'
import Animate from './Animate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple animation</h1>
        </header>
        <Animate />
      </div>
    )
  }
}

export default App
