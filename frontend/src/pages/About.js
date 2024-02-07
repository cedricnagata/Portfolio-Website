import React from 'react';
import './styles/About.css';

function About() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div class="intro">
                <p><strong>Hello! I'm Cedric Nagata, </strong> 
                    a Computer Science student nearing the completion of my academic journey at the Paul G. Allen 
                    School of Computer Science and Engineering at the University of Washington. My enthusiasm 
                    lies in web development, data management, and machine learning, areas that blend 
                    creativity with logic in the most fascinating ways.</p>
            </div>

            <div class="experience">
                <h3>Experience:</h3>
                <p>I had the privilege of interning at <strong>Tyler Technologies, Inc</strong> 
                    during the summers of 2022 and 2023. As a software engineering intern, I:</p>
                <ul>
                    <li>Created a search functionality using Elasticsearch and Form.io that
                        processes thousands of data entries from across the country
                    </li>
                    <li>Created a secure form sharing functionality using Python, Django Admin, 
                        and Form.io.
                    </li>
                    <li>Used Docker to create a local development environment for a large-scale project, 
                        creating connected images for Django, Form.io, Elasticsearch, and PostgreSQL 
                        within the container.
                    </li>
                    <li>Enhanced my Python, Javascript, and HTML/CSS skills</li>
                </ul>
                <p>These experiences not only honed my technical skills but also provided a glimpse 
                    into the collaborative and innovative nature of the tech world.</p>
            </div>

            <div class="current-projects">
                <h3>Current Projects:</h3>
                <p>Currently, I am dedicating my time to a promising application that employs 
                    machine learning to aid individuals in identifying dermatological conditions 
                    through a simple smartphone snapshot. It’s a thrilling endeavor that aligns 
                    with my interest in utilizing technology to address real-world challenges. Visit 
                    the "Projects" tab to see my past projects... including this website!</p>
            </div>

            <div class="aspirations">
                <h3>Career Aspirations:</h3>
                <p>As I eagerly anticipate transitioning into the professional domain, I am seeking 
                    entry-level software engineering positions to continue nurturing my skills, 
                    contributing to meaningful projects, and engaging with a community of 
                    forward-thinking individuals.</p>
            </div>

            <div class="invitation">
                <p>I invite you to browse through my portfolio to learn more about my academic and 
                    professional adventures in computer science. Your thoughts, opportunities, and 
                    collaborative ideas are warmly welcomed as I am always eager for engaging projects 
                    and enriching interactions in the tech landscape.</p>
            </div>
        </div>
    );
}

export default About;
