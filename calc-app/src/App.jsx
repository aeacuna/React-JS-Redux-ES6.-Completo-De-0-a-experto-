import Function from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers';
import Result from './components/Result'
import './App.css';
import { useState } from 'react';

const onClickOperationFunction = operation => (
    console.log("operation :",operation)
)

const onClickEqualFunction = equal => (
    console.log("equal :",equal)
)

const onContentClearFunction = clear => (
    console.log("Content Clear")
)

const onDeleteFunction = del => {
    console.log("Content Delete")
}

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
                        setStack(number)
                    }} />
            <Function  
                onContentClear={onContentClearFunction}
                onDelete={onDeleteFunction}/>
            <MathOperations 
                onClickOperation={onClickOperationFunction}
                onClickEqual={onClickEqualFunction}/>
        </main>)
}

export default App;