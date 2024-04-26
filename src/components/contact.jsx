import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navigation from './nav';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({}); // State to track validation errors

    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = "Name is required";
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        }

        if (!message.trim()) {
            errors.message = "Message is required";
        }

        return errors;
    };

    const formSubmit = event => {
        event.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            // No errors, proceed with form submission
            console.log('Form submitted!');
        } else {
            // Errors found, update state to display errors
            setErrors(formErrors);
        }
    };

    return (
        <div className="contactContainer">
            <h2 className="contactHeader">Contact Me</h2>
            <form onSubmit={formSubmit}>
                <div className="contactName">
                    <label htmlFor="name">Name: </label><br />
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    {errors.name && <div className="error">{errors.name}</div>}

                </div>
                <div className="contactEmail">
                    <label htmlFor="email">Email: </label><br />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    {errors.email && <div className="error">{errors.email}</div>}

                </div>
                <div className="contactMessage">
                    <label htmlFor="message">Message: </label><br />
                    <textarea
                        type="message"
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    ></textarea>
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    );
}

export default Contact;