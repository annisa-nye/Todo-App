import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import WeatherTime from './components/WeatherTime';
import { ApiData } from './components/ApiData'; // Import ApiData component

function App() {
	return (
		<div className='App'>
			<WeatherTime />
			<main>
				<TodoWrapper />
			</main>
			<footer>
				<ApiData />
			</footer>
		</div>
	);
}

export default App;
