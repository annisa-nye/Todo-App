import './App.css';
import ApiData from './components/ApiData';
import TodoWrapper  from './components/TodoWrapper';


function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <ApiData />
    </div>
  );
}

export default App;
