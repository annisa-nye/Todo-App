import { useEffect, useState } from 'react'

function ApiData() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://onlineprojectsgit.github.io/API/WDEndpoint.json")
            .then(response => response.json())
            .then(json => setData(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <div id="output" style={{ backgroundColor: '#f5f5f5', padding: '1rem', marginTop: '1rem', borderRadius: '5px' }}>
            <p><strong>ID:</strong> {data.info.id}</p>
            <p><strong>Cohort:</strong> {data.info.cohort}</p>
            <p><strong>Name:</strong> {data.info.name}</p>
            <p><strong>Start:</strong> {data.info.start}</p>
            <p><strong>End:</strong> {data.info.end}</p>
            <p><strong>Instructor Name:</strong> {data.info.instructor.name}</p>
            <p><strong>Instructor Position:</strong> {data.info.instructor.position}</p>
            <p><strong>Instructor Cohorts:</strong> {data.info.instructor.cohorts}</p>
            <p><strong>Students:</strong> {Array.isArray(data.info.students) ? data.info.students.join(', ') : 'N/A'}</p>
        </div>
    )
}



export default ApiData;


