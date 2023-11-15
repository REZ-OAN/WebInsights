import './App.css';
import Counter from './Components/Counter/Counter';
import Todos from './Components/Todos/Todos';
const App = () => {
  return (
    <div className="app">
      <h1>REACT-REDUX</h1>
      <Counter/>
      <h1>REACT-REDUX With Redux-Toolkit</h1>
      <Todos/>
    </div>
  )
}

export default App;