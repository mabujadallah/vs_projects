import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import SocialLinks from '../components/Contact/SocialLinks';

const Contact = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="mb-4">I'd love to hear from you! Please fill out the form below or reach out through my social profiles.</p>
            <ContactForm />
            <SocialLinks />
        </div>
    );
};

export default Contact;