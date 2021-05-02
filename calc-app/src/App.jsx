/* eslint no-eval : 0*/
import { useState } from 'react'
import words from 'lodash.words'
import Function from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css';

const App = () => {
    const [stack, setStack] = useState("")
    //const texto = arrayTextoFuncionModificaTexto[0]
    //const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]
    const regex = /[^-^+^*^/]+/g
    const items = words(stack, regex)
    console.log("Renderización de App", items)
    const value = items.length > 0 ? items[items.length-1] : "0"
    return (
        <main className="react-calculator">
            <Result value={value}/>
                <Numbers 
                    onClickNumber={number => {
                        console.log(number)
                        setStack(`${stack}${number}`)
                    }} />
            <Function  
                onContentClear={() => {
                    console.log("Content clear")
                    setStack(' ')
                }}
                onDelete={() => {
                    if(stack.length > 0 ) {
                        console.log("Content Delete")
                        const newStack = stack.substring(0, stack.length-1)
                        setStack(newStack)
                    }
                }}/>
            <MathOperations 
                onClickOperation={operation => {
                    console.log("operation :",operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("equal :",equal)
                    setStack(eval(stack).toString())
                }}/>
        </main>)
}

export default App;