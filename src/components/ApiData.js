import React, { useEffect, useState } from 'react';

export const ApiData = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Request failed');
				}
				const data = await response.json();
				console.log('Fetched data:', data);
				setData(data);
			} catch (error) {
				setError(error.message);
			}
		};

		getData('https://onlineprojectsgit.github.io/API/WDEndpoint.json');
	}, []);

	if (error) {
		return <div id='output'>Error: {error}</div>;
	}

	if (!data) {
		return <div id='output'>Loading...</div>;
	}

	return (
		<div
			id='output'
			style={{
				backgroundColor: '#f5f5f5',
				padding: '1rem',
				marginTop: '1rem',
				borderRadius: '5px',
			}}
		>
			<p>
				<strong>ID:</strong> {data.info.id}
			</p>
			<p>
				<strong>Cohort:</strong> {data.info.cohort}
			</p>
			<p>
				<strong>Name:</strong> {data.info.name}
			</p>
			<p>
				<strong>Start:</strong> {data.info.start}
			</p>
			<p>
				<strong>End:</strong> {data.info.end}
			</p>
			<p>
				<strong>Instructor Name:</strong> {data.info.instructor.name}
			</p>
			<p>
				<strong>Instructor Position:</strong> {data.info.instructor.position}
			</p>
			<p>
				<strong>Instructor Cohorts:</strong> {data.info.instructor.cohorts}
			</p>
			<p>
				<strong>Students:</strong>{' '}
				{Array.isArray(data.info.students)
					? data.info.students.join(', ')
					: 'N/A'}
			</p>
		</div>
	);
};
