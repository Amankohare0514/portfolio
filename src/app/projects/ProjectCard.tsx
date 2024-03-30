"use client"
// components/ProjectCard.js
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ title, description, githubLink }: any) => {
  return (
    <div className="flex flex-col mt-3 justify-between p-4 bg-transparent border shadow-md rounded-lg md:h-[100px] h-[140px] max-w-[800px]">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-gray-600 dark:text-gray-500 font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
