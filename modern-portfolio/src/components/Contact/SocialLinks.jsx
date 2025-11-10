import React from 'react';

const SocialLinks = () => {
    return (
        <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                Google Scholar
            </a>
        </div>
    );
};

export default SocialLinks;