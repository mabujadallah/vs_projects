import React from 'react';
import PublicationCard from './PublicationCard';
import publicationsData from '../../data/publications';

const PublicationList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicationsData.map((publication, index) => (
                <PublicationCard 
                    key={index} 
                    title={publication.title} 
                    abstract={publication.abstract} 
                    link={publication.link} 
                />
            ))}
        </div>
    );
};

export default PublicationList;