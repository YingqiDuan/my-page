import React from 'react';

interface ProjectProps {
    title: string;
    githubLink?: string;
    detailsLink?: string;
    tech: string;
}

const Project: React.FC<ProjectProps> = ({ title, githubLink, detailsLink, tech }) => {
    return (
        <div>
            <h4 className="text-xl font-semibold">{title}</h4>
            <div className="flex gap-2">
                {githubLink && (
                    <a
                        href={githubLink}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                )}
                {detailsLink && (
                    <a
                        href={detailsLink}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Details
                    </a>
                )}
            </div>
            <p className="mt-2 text-sm text-gray-600">
                <strong>Tech:</strong> {tech}
            </p>
        </div>
    );
};

export default Project;