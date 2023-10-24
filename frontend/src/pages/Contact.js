import React from 'react';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="page-title">Contact Me</h1>
            
            {/* Contact Form */}
            <div className="contact-form-wrapper">
                <form className="contact-form">
                    <div className="input-group">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            
            {/* Contact Details with Icons */}
            <div className="contact-details">
                <p><i className="fas fa-envelope"></i> <a href="mailto:cedric.nagata@gmail.com">cedric.nagata@gmail.com</a></p>
                <p><i className="fas fa-phone"></i> <a href="tel:425-691-7180">425-691-7180</a></p>
            </div>
            
            {/* Social Media Links */}
            <div className="social-links">
                <a href="https://github.com/cedricnagata" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="YOUR_LINKEDIN_PROFILE_URL" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    );
}

export default Contact;
