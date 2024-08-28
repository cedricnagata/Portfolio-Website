import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import './styles/Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    const order = [
        "derm_dx",
        "skin_lesion_classifier",
        "anger-translator",
        "Portfolio-Website", 
        "UW-Campus-Routefinder",
        "Multithreaded-Web-Based-Search-Engine", 
        "Flight-Service-App", 
        "Artificial-Intelligence-and-Machine-Learning",
    ];

    
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/cedricnagata/repos');
                let fetchedProjects = response.data;

                // Sort the projects based on the defined order
                fetchedProjects.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

                setProjects(fetchedProjects);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError(error);
            }
        };

        fetchProjects();
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
