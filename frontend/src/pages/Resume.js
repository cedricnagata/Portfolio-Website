import React from 'react';

function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <div className="resume-content">
                <img src="/images/resume.jpg" alt="My Resume" className="centered-resume" />
                <a href="/docs/resume.pdf" download className="btn btn-primary">
                    Download My Resume
                </a>
            </div>           
        </div>
    );
}

export default Resume;
