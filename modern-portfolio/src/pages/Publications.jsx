import React from 'react';
import PublicationList from '../components/Publications/PublicationList';

const Publications = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Publications</h1>
            <PublicationList />
        </div>
    );
};

export default Publications;