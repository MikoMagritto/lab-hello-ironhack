import ReactDOM from 'react-dom'
import React from 'react'
import logo from '../public/images/'
import './index.css'

const App = () => {
    return (
        <div id="blue">
            <h1>Say hello to ReactJS</h1>
            <p> You will learn how to use</p>
            <img src={logo} alt="logo" />
            <button>Awesome</button>
        </div>
    )
}

export default App