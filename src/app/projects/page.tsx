"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import PushPinIcon from '@mui/icons-material/PushPin';
const projects = [
  {
    id: 1,
    title: 'Reform',
    description: 'Create and share beautiful form with Webflow s user-friendly prototype feature.',
    githubLink: 'https://github.com/project1',
  },
  {
    id: 2,
    title: 'My tube',
    description: 'Led the development of My_tube, an innovative YouTube clone. ',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 3,
    title: 'Student management system',
    description: 'Engineered a resilient system for seamless control: effortlessly read, update, and delete.',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 4,
    title: 'Github finder',
    description: 'GitHub Finder, a web app, simplifies searching for GitHub accounts and repositories. ',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 5,
    title: 'Right Draw',
    description: 'This platform is designed for crafting whiteboards and infinite canvas experiences. ',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 6,
    title: 'IMDB Clone',
    description: 'An IMDb clone, providing a comprehensive database of films, TV shows, and celebrities.',
    githubLink: 'https://github.com/project2',
  },
  {
    id: 7,
    title: 'Quiz-App',
    description: 'A Quiz-App offering an engaging and interactive platform for users to test their knowledge.',
    githubLink: 'https://github.com/project2',
  },
];

const Project = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-2xl font-bold md:text-3xl  text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
        Projects
      </h1>
       {/* pinned */}
        <div className="flex justify-center mt-8  items-center">
          <div className="w-full  max-w-[800px] md:w-[800px] rounded-lg bg-slate-50  dark:bg-gray-900 text-white  p-4 shadow-md mx-4 md:mx-0">
            <div className="flex items-center space-x-2">
              <PushPinIcon className="text-gray-800 dark:text-gray-700" />
              <span className="font-semibold">Pinned</span>
            </div>
            <p className="mt-2 text-gray-800 dark:text-gray-400">
              Hey there! Hey there! You can check out more projects developed by me by visiting my GitHub profile. Thanks and here is  {" "}
              <a target='_blank' className="text-sky-500 hover:underline" href="https://github.com/amankohare0514">
                github
              </a>
            </p>
          </div>
        </div>
      <section className="container font-sans mx-auto px-4 py-8 max-w-[800px]" >
        <div className="max-w-[800px] mx-auto">
          <div className="flex justify-center items-center mb-4">
            <input
              type="text"
              placeholder="Search projects name"
              className="px-2 py-2 w-[400px] bg-transparent text-black dark:text-white  rounded-md border focus:outline-none focus:border-blue-500"
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