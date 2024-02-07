import React from 'react';
import './styles/Resume.css';

function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <div className="resume-content">
                <img src="/images/cedric_nagata_resume.jpg" alt="My Resume" className="centered-resume" />
                <a href="/docs/cedric_nagata_resume.pdf" download className="btn btn-primary">
                    Download My Resume
                </a>
            </div>           
        </div>
    );
}

export default Resume;
