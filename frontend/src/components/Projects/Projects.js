import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
    // const [projects, setProjects] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Replace with your Django API endpoint URL
    //     const apiUrl = 'http://localhost:8000/api/github-repos/';

    //     axios.get(apiUrl)
    //         .then((response) => {
    //             setProjects(response.data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data: ", error);
    //             setError(error);
    //         });
    // }, []);

    // return (
    //     <div>
    //         <h1>I love making things.</h1>
    //         <p>Like this website!</p>
    //         <p>Created by me using Django and React!</p>
    //         {error && <p>{error.message}</p>}
    //         <ul>
    //             {projects.map((project) => (
    //                 <li key={project.id}>
    //                     <a href={project.html_url} target="_blank" rel="noopener noreferrer">
    //                         {project.name}
    //                     </a>: {project.description}
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
}

export default Projects;