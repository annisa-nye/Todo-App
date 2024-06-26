import React from 'react';

import { useFetchData } from "../hooks/useFetchData";


function ApiData() {
    const { data, isPending, error } = useFetchData('https://onlineprojectsgit.github.io/API/WDEndpoint.json')

    return (
        <div id="output" style={{ backgroundColor: '#f5f5f5', padding: '1rem', marginTop: '1rem', borderRadius: '5px' }}>
            {isPending && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {data && data.info ? (
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
            ) : (
                !isPending && !error && <div>No data available</div>
            )}
        </div>
    );
}

export default ApiData;

