import React from 'react';
import Bio from '../components/About/Bio';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <Bio />
        </div>
    );
};

export default About;