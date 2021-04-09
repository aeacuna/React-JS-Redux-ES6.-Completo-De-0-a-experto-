import './App.css';

const App = () => {
    return (<main className="react-calculator">
        <div className="result"></div>
        <div className="numbers">
            <buttons>1</buttons>
            <buttons>2</buttons>
            <buttons>3</buttons>
            <buttons>4</buttons>
            <buttons>5</buttons>
            <buttons>6</buttons>
            <buttons>7</buttons>
            <buttons>8</buttons>
            <buttons>9</buttons>
            <buttons>0</buttons>
        </div>
        <div className="functions">
            <buttons>Clear</buttons>
            <buttons>Remove</buttons>
        </div>
        <div className="math-operations">
            <buttons>+</buttons>
            <buttons>-</buttons>
            <buttons>*</buttons>
            <buttons>/</buttons>
            <buttons>=</buttons>
        </div>
    </main>);
}

export default App;