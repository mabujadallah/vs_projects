import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects';

const ProjectGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    link={project.link} 
                />
            ))}
        </div>
    );
};

export default ProjectGrid;