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

        className="min-h-[80vh] flex items-center py-12 xl:py-0"
>
    <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
            gap-6">
                 <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                   <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
                <TabsContent value ="expeerience" className="w-full">
                    experience
                </TabsContent>
                
            </div>
        </Tabs>
        </div> 
    </motion.div>  
    );
};

 export default Resume;