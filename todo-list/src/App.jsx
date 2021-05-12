import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import './App.css';
import { createStore } from 'redux' 
import { Provider } from 'react-redux';

const reducer = (state, action) => {
  return state
}
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
    </Provider>
  );
}

export default App;
