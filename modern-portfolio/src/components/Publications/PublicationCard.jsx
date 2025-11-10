import React from 'react';

const PublicationCard = ({ title, abstract, link }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-700">{abstract}</p>
            <a href={link} className="mt-4 inline-block text-blue-500 hover:underline">
                Read more
            </a>
        </div>
    );
};

export default PublicationCard;