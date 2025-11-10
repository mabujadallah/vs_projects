const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
            >
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;