import React from 'react';

function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <p>
                Here is my resume...
            </p>
            <a href="/docs/resume.pdf" download className="btn btn-primary">
                Download My Resume
            </a>
        </div>
    );
}

export default Resume;
