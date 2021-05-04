
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
