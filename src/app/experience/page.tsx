import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

function Experience() {
    const data = [
        {
            title: "[Sep 2024 - present]",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-bold md:text-2xl mb-2">
                        Nexocide Private Limited
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-semibold md:text-2xl mb-2">
                        web developer - remote
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Led the end-to-end development of a responsive website with HTML, CSS, JavaScript and js framework react next.js, boosting responsiveness by 25%.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Significantly enhanced a dynamic web app using next.js, showcasing expertise in creating interactive and user-centric interfaces.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Demonstrated outstanding projectmanagement skills, consistentlymeeting timelines and exceeding client expectations.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Developed and maintained interactive user interfaces using React.js, enhancing user engagement and satisfaction.
                    </p>
                </div>
            ),
        },
        {
            title: "[Aug 2024 - Sep 2024]",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-bold md:text-2xl mb-2">
                        Dhakad Technosoft Private Limited
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-semibold md:text-2xl mb-2">
                        React Native developer - Indore, india
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Dhakad Technosoft is a rapidly growing, new generation IT company with extensive experience in designing and developing cutting edge custom software solutions and e-Business solutions.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        We develop robust Mobile and web solutions that transform businesses into online management tools. We are a group of highly motivated IT professionals with ability to innovate and a strong desire to excel.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        From start ups to established businesses, we help people transform their mobile and web presence into an asset by creating competitive advantages through e-strategy, development, rapid deployment, and continuous management.
                    </p>
                </div>
            ),
        },
        {
            title: "[April 2024 - July 2024]",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-bold md:text-2xl mb-2">
                        NextOpson.in
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-semibold md:text-2xl mb-2">
                        Frontend developer - Bhopal, india
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Developed and Implemented Marketing Strategies: Spearheaded innovative marketing campaigns, resulting in a 30% increase in customer acquisition within the first quarter.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Developed Robust Mobile Applications: Designed and implemented feature-rich mobile applications for iOS and Android, enhancing user experience and increasing app downloads by 40%. Crafted Intuitive User Interfaces.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Created responsive and user-friendly interfaces using HTML, CSS, and JavaScript, leading to a 35% improvement in user engagement and satisfaction.
                    </p>
                </div>
            ),
        },
        {
            title: "[Nov 2023 - Jan 2024]",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-bold md:text-2xl mb-2">
                        SalesQueen Software solution
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-semibold md:text-2xl mb-2">
                        Frontend developer - remote
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Led the end-to-end development of a responsive website withHTML, CSS, and JavaScript, boosting responsiveness by 25%.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Significantly enhanced a dynamic web app using React.js, showcasing expertise in creating interactive and user-centric interfaces.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Demonstrated outstanding projectmanagement skills, consistentlymeeting timelines and exceeding client expectations.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Developed and maintained interactive user interfaces using React.js, enhancing user engagement and satisfaction.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}


export default Experience