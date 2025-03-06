import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

function Experience() {
    const data = [
        {
            title: "[March 2024 - Present]",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-bold md:text-2xl mb-2">
                        Techloom Solutions Private Limited
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-semibold md:text-2xl mb-2">
                        Co-founder & CEO - Bhopal
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                    At Techloom Solutions, we're not just another tech company ? we're your partners in progress. With a relentless commitment to excellence and a passion for innovation, we specialize in crafting bespoke solutions that exceed expectations.
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
            title: "[Sep 2024 - Jan 2025]",
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
            title: "[April 2024 - July 2024]",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-bold md:text-2xl mb-2">
                        NextOpson.in
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xl font-semibold md:text-2xl mb-2">
                        Frontend developer - Bhopal
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
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}


export default Experience