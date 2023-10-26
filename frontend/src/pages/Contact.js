import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import './styles/Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = `${API_BASE_URL}/api/send-email/`; // Your API URL
            const response = await axios.post(apiUrl, {
                name: name,
                email: email,
                message: message
            });
            if (response.status === 200) {
                alert('Email sent successfully!');
            }
        } catch (error) {
            alert('Error sending email. Please try again.');
        }
    };

    return (
        <div className="contact-container">
            <h1 className="page-title">Contact Me</h1>
            
            {/* Contact Form */}
            <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Message" value={message} onChange={handleMessageChange} required></textarea>
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
                <a href="https://www.linkedin.com/in/cedric-nagata/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    );
}

export default Contact;
