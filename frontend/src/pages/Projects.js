import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import './styles/Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    const order = [
        "Portfolio-Website", 
        "Flight-Service-App", 
        "UW-Campus-Routefinder",
        "Multithreaded-Web-Based-Search-Engine",
        "U.S.-Population-Matrix",
        "Artificial-Intelligence-and-Machine-Learning",
        "News-Web-App",
    ];

    
    useEffect(() => {
        /*
        const apiUrl = `${API_BASE_URL}/api/github-repos/`;

        axios.get(apiUrl)
            .then((response) => {
                let fetchedProjects = response.data;
                fetchedProjects.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            });
        */

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
