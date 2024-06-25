import React, { useEffect, useState } from 'react';

function ApiData() {
    const [data, setData] = useState({}); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); 

        fetch("https://onlineprojectsgit.github.io/API/WDEndpoint.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Optionally set an error state here if needed
            })
            .finally(() => {
                setLoading(false); // Always set loading to false after fetch completes
            });

    }, []); // Empty dependency array ensures effect runs only once

    return (
        <div id="output" style={{ backgroundColor: '#f5f5f5', padding: '1rem', marginTop: '1rem', borderRadius: '5px' }}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <p><strong>ID:</strong> {data.info ? data.info.id : 'N/A'}</p>
                    <p><strong>Cohort:</strong> {data.info ? data.info.cohort : 'N/A'}</p>
                    <p><strong>Name:</strong> {data.info ? data.info.name : 'N/A'}</p>
                    <p><strong>Start:</strong> {data.info ? data.info.start : 'N/A'}</p>
                    <p><strong>End:</strong> {data.info ? data.info.end : 'N/A'}</p>
                    <p><strong>Instructor Name:</strong> {data.info && data.info.instructor ? data.info.instructor.name : 'N/A'}</p>
                    <p><strong>Instructor Position:</strong> {data.info && data.info.instructor ? data.info.instructor.position : 'N/A'}</p>
                    <p><strong>Instructor Cohorts:</strong> {data.info && data.info.instructor ? data.info.instructor.cohorts : 'N/A'}</p>
                    <p><strong>Students:</strong> {Array.isArray(data.info && data.info.students) ? data.info.students.join(', ') : 'N/A'}</p>
                </>
            )}
        </div>
    );
}

export default ApiData;


