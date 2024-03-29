"use client"
import React from "react"
function Experience() {
  return (
    <>
      <section className="mt-6 font-sans p-4 text-gray-600 dark:text-gray-300 bg-transparent mx-auto max-w-[800px]">
        <h1 className="text-2xl md:text-3xl font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-500 bg-opacity-50">
          Experience
        </h1>
        <div className="grid mt-6 md:grid-cols-2 gap-8 ">

          {/* //first section */}
          <div className="border p-5">
            <h3 className="text-xl font-semibold mb-2">FrontEnd - at Salesqueen Software Solutions - Intern - Chennai, India</h3>
            <p className="mb-4">Nov 2023 - Dec 2023</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Led the end-to-end development of a responsive website withHTML, CSS, and JavaScript, boosting responsiveness by 25%.
              </li>
              <li>
                Significantly enhanced a dynamic web app using React.js, showcasing expertise in creating interactive and user-centric interfaces.
              </li>
              <li>
                Demonstrated outstanding projectmanagement skills, consistentlymeeting timelines and exceeding client expectations.
              </li>
            </ul>
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-gray-600 dark:text-gray-300"><a href="https://salesqueen.org/">SSS</a></span>
            </div>
          </div>

          {/* //second section */}
          <div className="border p-5">
            <h3 className="text-xl font-semibold mb-2">Web development - at Code Soft - Intern -Kolkata, West Bengal, India</h3>
            <p className="mb-4">July 2023 - October 2023</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Spearheaded the development of microservices and user interface components, resulting in a 30% increase in
                user engagement for the client’s personality development system
              </li>
              <li>
                Developed a CI/CD workflow to automatically perform a set of actions daily on a product in development in
                order to decrease time needed for team members to identify and fix bugs/issues
              </li>

            </ul>
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-gray-600 dark:text-gray-300"><a href="https://codsoft.in/">CodeSoft</a></span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Experience