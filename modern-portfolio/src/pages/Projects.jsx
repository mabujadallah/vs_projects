import React from 'react';
import ProjectGrid from '../components/Projects/ProjectGrid';
import { projectsData } from '../data/projects';

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <p className="mb-4">Here are some of the key projects I've worked on:</p>
            <ProjectGrid projects={projectsData} />
        </div>
    );
};

export default Projects;