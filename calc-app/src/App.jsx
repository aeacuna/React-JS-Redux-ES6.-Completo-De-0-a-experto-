import Button from './components/Button'
import Function from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css';

const clickHandlerFunction = text => (
    console.log("Button.clickHandler1", text)
)

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
    return (
        <main className="react-calculator">
            <Result value={undefined}/>
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
            <Function  
                onContentClear={onContentClearFunction}
                onDelete={onDeleteFunction}/>
            <MathOperations 
                onClickOperation={onClickOperationFunction}
                onClickEqual={onClickEqualFunction}/>
        </main>)
}

export default App;