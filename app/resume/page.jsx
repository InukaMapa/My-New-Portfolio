"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs}
from "react-icons/fa"

const experience = {
  title: "My Experience",
  description:
    "Over 1 year of hands-on experience in front-end and full-stack web development, focusing on modern frameworks like React and tools like Tailwind CSS.",

items: [
  {
    role: "Frontend Developer",
    company: "Freelance",
    duration: "Jan 2024 – Present",
    details:
      "Built responsive websites for 5+ local businesses using React.js and Tailwind CSS. Focused on clean UI, SEO optimization, and mobile-first design.",
  },
  {
    role: "Intern Web Developer",
    company: "CodeLab Technologies",
    duration: "Aug 2023 – Dec 2023",
    details:
      "Assisted in developing internal admin panels and customer portals. Fixed UI bugs, improved form validations, and integrated REST APIs.",
  },
  {
    role: "UI Designer",
    company: "Personal Projects",
    duration: "May 2023 – Jul 2023",
    details:
      "Designed modern interfaces using Figma and implemented them using HTML, CSS, and JavaScript for personal websites and client mockups.",
  },
  {
    role: "Full Stack Developer (Capstone)",
    company: "Online Bootcamp",
    duration: "Mar 2023 – May 2023",
    details:
      "Developed a full-stack task manager app using MongoDB, Express.js, React.js, and Node.js (MERN stack). Implemented authentication and CRUD features.",
  },
  {
    role: "React.js Developer",
    company: "Open Source Contributions",
    duration: "Feb 2023 – Apr 2023",
    details:
      "Contributed to open-source React projects on GitHub. Created reusable components and improved accessibility and performance.",
  },
  {
    role: "Frontend Developer",
    company: "Hackathon Team – CodeSprint",
    duration: "Jan 2023",
    details:
      "Collaborated with a team of 3 to build a weather dashboard app in 24 hours. Won 2nd place among 30+ teams.",
  },
  {
    role: "Junior Web Developer",
    company: "University Projects",
    duration: "Sep 2022 – Dec 2022",
    details:
      "Built a university event management system using HTML, CSS, and JavaScript. Learned version control and teamwork using Git and GitHub.",
  },
  {
    role: "Student Developer",
    company: "Codecademy",
    duration: "2022",
    details:
      "Completed the Front-End Engineer track, learning JavaScript, React, Git, and asynchronous programming through 100+ interactive lessons and projects.",
  },
],

};

const about ={
    title:'About me',
    description:"",
    info:[
        {
          fieldName:"Name" ,
          fieldValue: "Inuka M Mapa" 
        },
        {
          fieldName:"Phone" ,
          fieldValue: "(+94)76 170 2500" 
        },
        {
          fieldName:"Experience" ,
          fieldValue: "1 Years" 
        },
        {
          fieldName:"Nationality" ,
          fieldValue: "Sri Lanka" 
        },
        {
          fieldName:"Email" ,
          fieldValue: "inukashan123@gmail.com" 
        },
        {
          fieldName:"Freelance" ,
          fieldValue: "Available" 
        },
        {
          fieldName:"Languages" ,
          fieldValue: "English" 
        },
    ]
};

const education={
    icon:"/assets/resume/cap.svg",
    title: "My education",
    description:"",
    items: [
        {
            institution:"Omline Course Platform",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023",
        },
        {
            institution:"Codeacademy",
            degree: "Front-end Track",
            duration: "2023",
        },
     ],
};

const skills ={
    title: "My skills",
    description:"",
skillist:[
    {
        icon:<FaHtml5 />,
        name:"html 5",
    },
     {
        icon:<FaCss3 />,
        name:"css 3",
    },
     {
        icon:<FaJs />,
        name:"javascript",
    },
     {
        icon:<FaReact />,
        name:"react.js",
    },
     {
        icon:<FaFigma />,
        name:"figma",
    },
    ],
}; 

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
 } from "@/components/ui/tooltip";


import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
         <motion.div
          initial={{opacity: 0}}
         animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}

        className="min-h-[80vh] flex items-center py-12 xl:py-0">
            
    <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
            gap-6">
                 <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                   <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
                
                <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                    </p>
                       <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {experience.items.map((item,index)=> {
                                 return (
                                    <li key={index} className="bg-white/10 p-4 rounded-lg">
                                     <span className="text-xs text-white/50">{item.duration}</span>
                                        <h3 className="text-lg font-semibold text-white mt-2">{item.role}</h3>
                                        <p className="text-sm text-white/80">{item.company}</p>
                                        <p className="mt-2 text-white/70 text-justify">{item.details}</p>
                                                </li>
                                            );
                                            })}
                                        </ul>
                                        </ScrollArea>

                </div>
                </TabsContent>
                <TabsContent value ="education" className="w-full">
                     education
                </TabsContent>
                <TabsContent value ="skills" className="w-full">
                     skills
                </TabsContent>
                <TabsContent value ="about" className="w-full">
                     about
                </TabsContent>
            </div>
        </Tabs>
        </div> 
    </motion.div>  
    );
};

 export default Resume;