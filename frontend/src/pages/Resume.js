import React from 'react';
import './styles/Resume.css';

function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <div className="resume-content">
                <img src="/images/resume_tyler.jpg" alt="My Resume" className="centered-resume" />
                <a href="/docs/resume_tyler.pdf" download className="btn btn-primary">
                    Download My Resume
                </a>
            </div>           
        </div>
    );
}

export default Resume;
