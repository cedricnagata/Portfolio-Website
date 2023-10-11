import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:8000/api/github-repos/'; // Your API URL

        axios.get(apiUrl)
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Projects</h1>
            {error && <p>{error.message}</p>}
            <ul className="list-group">
                {projects.map((project) => (
                    <li key={project.id} className="list-group-item">
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            {project.name}
                        </a>: {project.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
