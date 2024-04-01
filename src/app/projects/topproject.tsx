import React from 'react';
import projects from './projects';
import GitHubIcon from '@mui/icons-material/GitHub';
const TopProject = () => {
    // Get only the first two blog items
    const limitedProjectData = projects.slice(0, 2);

    return (
        <div className="p-4 max-w-[800px]  mx-auto relative w-full">
            <h1 className="text-xl mb-4 md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
                Top projects
            </h1>
          
                {limitedProjectData.map((item, index) => (
                     <div key={index} className="flex flex-col mt-3 justify-between p-6 bg-transparent border shadow-md rounded-lg md:h-[120px] h-[140px] max-w-[800px] transition-transform duration-300 hover:scale-95">
                     <div className="flex justify-between">
                       <div>
                         <h3 className="text-xl text-gray-600 dark:text-gray-500 font-semibold mb-2">{item.title}</h3>
                         <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                       </div>
                       <a
                         href={item.githubLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center"
                       >
                         <GitHubIcon />
                       </a>
                     </div>
                   </div>
                ))}
            </div>
    )
}

export default TopProject;
