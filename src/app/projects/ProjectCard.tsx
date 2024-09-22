"use client"
// components/ProjectCard.js
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const ProjectCard = ({ title, description, githubLink , liveLink }: any) => {
  return (
    <div className="flex flex-col mt-3 justify-between p-4 bg-transparent border shadow-md rounded-lg md:h-[100px] h-[140px] max-w-[800px] hover:bg-gray-100 dark:hover:bg-gray-900">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="mb-4">{description}</p>
        </div>
        <div className='flex items-center'>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className='ml-2 hover:text-blue-600'
          >
            <GitHubIcon />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className='ml-2 hover:text-red-600'
          >
            < OpenInNewIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
