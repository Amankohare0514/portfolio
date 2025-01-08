import { TypeIcon as type, LucideIcon, Briefcase, Code, GraduationCap, User, Mail, Phone, MapPin, Github, Linkedin, Calendar } from 'lucide-react'

interface SectionProps {
  title: string
  children: React.ReactNode
  icon: LucideIcon
}

function Section({ title, children, icon: Icon }: SectionProps) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2 text-gray-800 border-b pb-1 flex items-center">
        <Icon className="w-5 h-5 mr-2" />
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function MERNDevResume() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg text-sm">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Aman Kohare</h1>
        <div className="mt-2 text-gray-600 flex flex-wrap justify-center gap-2">
          <span className="flex items-center"><Mail className="w-4 h-4 mr-1" /> amankohare@gmail.com</span>
          <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> (+91) 62685 18514</span>
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Indore, Mp</span>
          <a href="https://github.com/amankohare0514" className="text-blue-600 hover:underline flex items-center"><Github className="w-4 h-4 mr-1" /> GitHub</a>
          <a href="https://www.linkedin.com/in/aman-kohare-3a0678235/" className="text-blue-600 hover:underline flex items-center"><Linkedin className="w-4 h-4 mr-1" /> LinkedIn</a>
        </div>
      </header>

      {/* Experience */}
      <Section title="Experience" icon={Briefcase}>
        <div className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-semibold">Senior MERN Stack Developer</h3>
              <p className="text-gray-600">TechCorp Inc.</p>
            </div>
            <p className="text-gray-600 text-right flex items-center"><Calendar className="w-4 h-4 mr-1" /> Jan 2019 - Present</p>
          </div>
          <ul className="list-disc list-inside mt-1 text-gray-700">
            <li>Led a team of 5 developers in building large-scale web applications</li>
            <li>Implemented microservices architecture, improving system scalability by 40%</li>
            <li>Optimized database queries, reducing load times by 30%</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-semibold">Full Stack Developer</h3>
              <p className="text-gray-600">WebSolutions LLC</p>
            </div>
            <p className="text-gray-600 text-right flex items-center"><Calendar className="w-4 h-4 mr-1" /> Jun 2016 - Dec 2018</p>
          </div>
          <ul className="list-disc list-inside mt-1 text-gray-700">
            <li>Developed and maintained multiple client websites using MERN stack</li>
            <li>Implemented responsive designs, ensuring cross-browser compatibility</li>
            <li>Integrated third-party APIs and payment gateways</li>
          </ul>
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects" icon={Code}>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-base font-semibold">E-commerce Platform</h3>
              <p className="text-gray-600 text-right flex items-center"><Calendar className="w-4 h-4 mr-1" /> Mar 2022</p>
            </div>
            <ul className="list-disc list-inside mt-1 text-gray-700">
              <li>Full-featured MERN stack e-commerce platform</li>
              <li>Implemented user authentication, product management, and order processing</li>
              <li>Technologies: React, Node.js, Express, MongoDB, Redux</li>
            </ul>
            <a href="https://github.com/johndoe/ecommerce-platform" className="text-blue-600 hover:underline flex items-center mt-1"><Github className="w-4 h-4 mr-1" /> View on GitHub</a>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-base font-semibold">Task Management App</h3>
              <p className="text-gray-600 text-right flex items-center"><Calendar className="w-4 h-4 mr-1" /> Nov 2021</p>
            </div>
            <ul className="list-disc list-inside mt-1 text-gray-700">
              <li>Real-time collaborative task management application</li>
              <li>Implemented real-time updates and collaborative features</li>
              <li>Technologies: React, Node.js, Express, MongoDB, Socket.io</li>
            </ul>
            <a href="https://github.com/johndoe/task-management-app" className="text-blue-600 hover:underline flex items-center mt-1"><Github className="w-4 h-4 mr-1" /> View on GitHub</a>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-base font-semibold">Social Media Dashboard</h3>
              <p className="text-gray-600 text-right flex items-center"><Calendar className="w-4 h-4 mr-1" /> Jul 2021</p>
            </div>
            <ul className="list-disc list-inside mt-1 text-gray-700">
              <li>Centralized dashboard for managing multiple social media accounts</li>
              <li>Implemented analytics and scheduling features</li>
              <li>Technologies: React, Node.js, Express, MongoDB, GraphQL</li>
            </ul>
            <a href="https://github.com/johndoe/social-media-dashboard" className="text-blue-600 hover:underline flex items-center mt-1"><Github className="w-4 h-4 mr-1" /> View on GitHub</a>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" icon={User}>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Redux', 'Jest', 'Docker', 'AWS', 'Git'].map((skill) => (
            <span key={skill} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" icon={GraduationCap}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University of Technology</p>
          </div>
          <p className="text-gray-600 text-right flex items-center"><Calendar className="w-4 h-4 mr-1" /> Graduated: May 2016</p>
        </div>
      </Section>
    </div>
  )
}

