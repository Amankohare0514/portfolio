"use client"
// components/ProjectCard.js
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ title, description, githubLink  }: any) => {
  return (
    <div className="flex flex-col mt-3 justify-between p-4 bg-transparent border shadow-md rounded-lg md:h-[140px] h-[180px] max-w-[800px]">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon/>
      </a>
    </div>
  );
};

export default ProjectCard;
