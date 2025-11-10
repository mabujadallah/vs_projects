import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white mx-2">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
                    <a href="https://scholar.google.com/citations?user=yourusername" className="text-gray-400 hover:text-white mx-2">Google Scholar</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;