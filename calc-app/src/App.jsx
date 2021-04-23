import Function from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers';
import Result from './components/Result'
import './App.css';

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

const onClickNumberFunction = number => {
    console.log(number)
}

const App = () => {
    return (
        <main className="react-calculator">
            <Result value={undefined}/>
                <Numbers 
                    onClickNumber={onClickNumberFunction} />
            <Function  
                onContentClear={onContentClearFunction}
                onDelete={onDeleteFunction}/>
            <MathOperations 
                onClickOperation={onClickOperationFunction}
                onClickEqual={onClickEqualFunction}/>
        </main>)
}

export default App;