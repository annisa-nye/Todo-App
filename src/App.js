import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import WeatherTime from './components/WeatherTime';

function App() {
  return (
    <div className="App">
      <WeatherTime />
      <TodoWrapper />
    </div>
  );
}

export default App;
