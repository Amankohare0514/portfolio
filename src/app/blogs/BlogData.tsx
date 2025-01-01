"use client"
const Cards = [
  {
    description: "Welcome to the next chapter in web development with Next.js! With every...",
    title: "Introducing Next.js Unveiling Exciting New Features",
    src: "/blogs/next.png",
    ctaText: "Visit",
    ctaLink: "https://medium.com/@amankohare/introducing-next-js-unveiling-exciting-new-features-374bb4830b83",
    content: () => {
      return (
        <p>
          Welcome to the next chapter in web development with Next.js! With every iteration, Next.js continues to push boundaries, empowering developers to craft exceptional web experiences effortlessly. In this blog post, we’re thrilled to introduce the latest features that further elevate Next.js as the premier framework for building modern web applications.

          1. Incremental Static Regeneration (ISR)

          One of the most anticipated features in Next.js is Incremental Static Regeneration (ISR). ISR allows developers to update static content without rebuilding the entire site. This means faster updates and improved performance, as only the necessary pages are regenerated when data changes. With ISR, developers can strike the perfect balance between static and dynamic content, ensuring a seamless user experience while maintaining the benefits of static site generation.
        </p>
      );
    },
  },
  {
    description: "list of 10 tools that developers across various domains and technologies may find useful..",
    title: "10 tools that developers across various domains and technologies may find useful",
    src: "/blogs/tools.jpeg",
    ctaText: "Visit",
    ctaLink: "https://medium.com/@amankohare/10-tools-that-developers-across-various-domains-and-technologies-may-find-useful-05c52d5699ee",
    content: () => {
      return (
        <p>
          Version Control Systems (VCS) like Git: Essential for tracking changes in code, collaborating with others, and managing codebase versions.
          Integrated Development Environments (IDEs):
          Visual Studio Code (VS Code): A lightweight, powerful code editor with rich extensions for various languages and frameworks.
          IntelliJ IDEA: A robust IDE for Java development with features like code completion, refactoring, and debugging.
          3. Package Managers:

          npm (Node Package Manager): Essential for managing dependencies in Node.js projects.
          pip (Python Package Installer): Used for installing and managing Python packages.
        </p>
      );
    },
  },

  {
    description: "Vercel is a cloud platform that provides a serverless deployment platform for frontend developers...",
    title: "How to deploy your website on vercel?",
    src: "/blogs/vercel.jpg",
    ctaText: "Visit",
    ctaLink: "https://medium.com/@amankohare/how-to-deploy-website-on-vercel-da6c54a184d6",
    content: () => {
      return (
        <p>
          Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.

          When you create a deployment, Vercel automatically adds a new and unique Generated URL. You can visit this URL to preview your changes in a live environment. You can deploy your projects to Vercel in four different ways: The most common way to create a Deployment on Vercel is through pushing code to Git repositories.

          On the “New Project” page, under the “Import Git Repository” section, choose the account that you’d like to link a project from.
        </p>
      );
    },
  },
  {
    description: "Becoming a successful web developer involves a combination of technical skills, continuous learning...",
    title: "How To Become Successful Web developer?",
    src: "/blogs/developer.webp",
    ctaText: "Visit",
    ctaLink: "https://medium.com/@amankohare/how-to-become-successful-web-developer-f44874874e23",
    content: () => {
      return (
        <p>
          Becoming a successful web developer involves a combination of technical skills, continuous learning, and a proactive approach to personal and professional growth. Here are some steps to help you become a successful web developer:

          1. **Learn the Fundamentals:**
          — Start with the basics of HTML, CSS, and JavaScript, as these are the building blocks of web development.
          — Understand how the internet works, including HTTP, client-server architecture, and how web browsers render content.
        </p>
      );
    },
  },
];

export default Cards