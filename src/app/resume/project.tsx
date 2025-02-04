import Link from 'next/link';
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
                    <Link
                        href={githubLink}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Link>
                )}
                {detailsLink && (
                    <Link
                        href={detailsLink}
                        className="text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                    >
                        Details
                    </Link>
                )}
            </div>
            <p className="mt-2 text-sm text-gray-600">
                <strong>Tech:</strong> {tech}
            </p>
        </div>
    );
};

export default Project;