"use client"
import React from "react"
import Link from "next/link"
function Experience() {
  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-500 to-sky-600 bg-opacity-50">
        Experience
      </h1>
      <section className="font-sans p-4 text-gray-600 dark:text-gray-300 bg-transparent mx-auto max-w-[800px]">
        <div className="prose prose-neutral dark:prose-invert">
          <p>
          Front-end specialist crafting visually appealing, responsive user interfaces.
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter">
            Salesqueen Software Solutions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Intern - Chennai, India - <span>[Nov 2023 - feb 2024]</span>
          </p>
          <p>
            Led the end-to-end development of a responsive website withHTML, CSS, and JavaScript, boosting responsiveness by 25%. <br />
            Significantly enhanced a dynamic web app using React.js, showcasing expertise in creating interactive and user-centric interfaces.<br />
            Demonstrated outstanding projectmanagement skills, consistentlymeeting timelines and exceeding client expectations.<br />
          </p>

          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter">
            Code Soft
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Intern -Kolkata, West Bengal, India  - <span>[Oct 2023 - Nov 2023]</span>
          </p>
          <p>
            Spearheaded the development of microservices and user interface components, resulting in a 30% increase in user engagement for the client’s personality development system<br />
            Developed a CI/CD workflow to automatically perform a set of actions daily on a product in development in order to decrease time needed for team members to identify and fix bugs/issues<br />
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          <h2 className="font-medium text-xl mb-1 tracking-tighter">
            CodeClause
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Intern - Pune ,India - <span>[April 2023 – July 2023]</span>
          </p>
          <p>
            Orchestrated the creation of static websites for clients, accompanied by the development of microservices for seamlesswebsite operation.<br />
            Played a pivotal role in shaping architecture plans, UI designs, and feature development, contributing to a 15% increase in project success rate.<br />
            Led the creation of static websites and seamless microservices, resulting in a 20% reduction in project timelines, enhancing client satisfaction and delivery efficiency.<br />
          </p>
        </div>
      </section>
    </>
  )
}

export default Experience