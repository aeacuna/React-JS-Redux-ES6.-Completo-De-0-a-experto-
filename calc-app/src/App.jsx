import React from 'react'
import Result from './components/Result'
import Button from './components/Button'
import './App.css';

const clickHandlerFunction = text => {
    console.log("Button.clickHandler1", text)
}

const App = () => {
    return (
        <main className="react-calculator">
            <Result value={0}/>
            <div className="numbers" >
                <Button text="1" clickHandler={clickHandlerFunction}/>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions">
                <button>Clear</button>
                <button>Remove</button>
            </div>
            <div className="math-operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>
        </main>)
}

export default App;