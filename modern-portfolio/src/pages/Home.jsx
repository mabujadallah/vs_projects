import React from 'react';
import Hero from '../components/Home/Hero';
import Bio from '../components/About/Bio';
import ProjectGrid from '../components/Projects/ProjectGrid';
import PublicationList from '../components/Publications/PublicationList';
import ContactForm from '../components/Contact/ContactForm';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <Bio />
            <ProjectGrid />
            <PublicationList />
            <ContactForm />
        </div>
    );
};

export default Home;