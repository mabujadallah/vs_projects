import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 mb-4"></div>
            <h1 className="text-4xl font-bold">Your Name</h1>
            <h2 className="text-2xl mt-2">Researcher & AI Enthusiast</h2>
            <TypewriterEffect />
        </div>
    );
};

export default Hero;