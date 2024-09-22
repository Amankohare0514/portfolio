"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import PushPinIcon from '@mui/icons-material/PushPin';
import projects from './projects';
import SearchIcon from '@mui/icons-material/Search';
const Project = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-xl mt-8 font-bold md:text-3xl  text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
        Projects
      </h1>
 
      <section className="container font-sans mx-auto px-4 py-8 max-w-[800px]" >
        <div className="max-w-[800px] mx-auto">
          <div className="flex justify-center items-center mb-4">
            <input
              type="text"
              placeholder="Search projects name"
              className="px-2 py-2 w-[800px] bg-transparent text-black dark:text-white  rounded-md border focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project