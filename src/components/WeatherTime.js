import React, { useState, useEffect } from 'react';

const WeatherTime = () => {
	const [weather, setWeather] = useState(null);
	const [time, setTime] = useState(new Date());
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch weather data
		const fetchWeather = async () => {
			try {
				const apiKey = '75a05d107635041c8de88c5b7447d5ab'; // Replace with your OpenWeatherMap API key
				const cityId = '7839805'; // Replace with the city you want to get the weather for
				const units = 'metric'; // Use 'imperial' for Fahrenheit
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=${units}`
				);
				if (!response.ok) {
					throw new Error('Failed to fetch weather data');
				}
				const data = await response.json();
				setWeather(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
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
			{loading ? (
				<p>Loading weather data...</p>
			) : error ? (
				<p>Error: {error}</p>
			) : (
				<>
					<h3>
						<em>{weather.name} AEST</em>
					</h3>
					<br />
					<div>
						<strong>Date:</strong> {time.toLocaleDateString()}
					</div>
					<div>
						<strong>Time:</strong> {time.toLocaleTimeString()}
					</div>
					{weather && (
						<div>
							<strong>Weather: </strong>
							{weather.main.temp}°C, {weather.weather[0].description}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default WeatherTime;
