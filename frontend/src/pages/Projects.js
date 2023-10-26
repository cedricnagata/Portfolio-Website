import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import './styles/Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = `${API_BASE_URL}/api/github-repos/`;

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
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
