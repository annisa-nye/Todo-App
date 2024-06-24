import React, { useState, useEffect } from 'react';

const WeatherTime = () => {
	const [weather, setWeather] = useState(null);
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		// Fetch weather data
		const fetchWeather = async () => {
			const apiKey = '75a05d107635041c8de88c5b7447d5ab'; // Replace with your OpenWeatherMap API key
			const cityId = '7839805'; // Replace with the city you want to get the weather for
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`
			);
			const data = await response.json();
			setWeather(data);
		};

		fetchWeather();

		// Update time every second
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='weather-time'>
			<div>
				<strong>Time:</strong> {time.toLocaleTimeString()}
			</div>
			{weather && (
				<div>
					<strong>Weather in {weather.name}:</strong>{' '}
					{weather.weather[0].description}, {weather.main.temp}°C
				</div>
			)}
		</div>
	);
};

export default WeatherTime;
