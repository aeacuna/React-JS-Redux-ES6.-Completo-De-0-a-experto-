import Function from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers';
import Result from './components/Result'
import './App.css';
import { useState } from 'react';

const App = () => {
    const [stack, setStack] = useState("")
    //const texto = arrayTextoFuncionModificaTexto[0]
    //const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    return (
        <main className="react-calculator">
            <Result value={stack}/>
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
                    console.log("Content Delete")
                    const newStack = stack.substring(0, stack.length-1)
                    setStack(newStack)
                }}/>
            <MathOperations 
                onClickOperation={operation => {
                    console.log("operation :",operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("equal :",equal)
                    setStack(`${stack}${equal}`)
                }}/>
        </main>)
}

export default App;