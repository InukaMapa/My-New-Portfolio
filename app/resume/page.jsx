"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaPython,
    FaNodeJs,
     FaDocker,
     FaPhp,
     FaAndroid
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs,SiFlutter} from "react-icons/si";

const experience = {
  title: "My Experience",
  description:
    "I am a Software Engineering undergraduate passionate about building real-world projects and improving my technical skills. I have practical knowledge, enjoy teamwork and collaboration, and am always eager to learn new technologies.",
  items: [
  {
    role: "Internship",
    company: "HNB NCR Regional Office",
    duration: "2022 Nov  – 2023 April",
    /*details:
      "Worked as an intern at HNB Bank, gaining hands-on experience in banking operations, customer service, and financial processes. Assisted in day-to-day tasks, learned about banking software, and developed professional skills in a corporate environment.",*/
  },
  {
    role: "Undergraduate Software Engineering Student",
    company: "CINEC Campus",
    duration: "2023 – 2027",
    /*details:
      "Undergraduate Software Engineering student with practical experience in full-stack web development (HTML, CSS, JavaScript, React) and programming using Java and Python. Engaged in AI-driven projects, applying machine learning techniques to real-world applications. Skilled in problem-solving, collaborative teamwork, and designing efficient software solutions.",*/
  }
],

};

const about ={
    title:'About me',
    description:"I am a Software Engineering undergraduate who is passionate about technology and software development. I enjoy building projects, learning new tools, and improving my coding skills. Currently, I am focusing on DevOps, cloud technologies, and backend development while preparing for my upcoming internship in the IT industry.",
    info:[
        {
          fieldName:"Name  :" ,
          fieldValue: " Inuka M Mapa" 
        },
        {
          fieldName:"Phone :" ,
          fieldValue: " (+94)76 170 2500" 
        },
        {
          fieldName:"Experience : " ,
          fieldValue: " 3 Years" 
        },
        {
          fieldName:"Nationality  :" ,
          fieldValue: " Sri Lanka" 
        },
        {
          fieldName:"Languages  :" ,
          fieldValue: " English"
        },
        {
          fieldName:"Freelance  :" ,
          fieldValue: " Available" 
        },
        {
          fieldName:"Email :" ,
          fieldValue: "inukashan123@gmail.com"
           
        },
    ]
};

const education={
    icon:"/assets/resume/cap.svg",
    title: "My education",
    description:"Currently pursuing a Bachelor’s degree in Software Engineering. I am developing skills in programming, web development, and modern technologies such as DevOps and cloud computing. I am passionate about learning new technologies and preparing myself for real-world software development and internship opportunities.",
    items: [
        {
            institution:"CINEC Campus",
            degree: "Software Engineering",
            duration: "2023-2027",
        },
        {
            institution:"IMBS Campus",
            degree: "ICT Foundation Course",
            duration: "2022",
        },
        {
            institution:"ICBT Campus",
            degree: "English Course",
            duration: "2022",
        },
        {
            institution:"Maliyadeva College",
            degree: "Physical Science Stream (Maths)",
            duration: "2021",
        }
     ],
};

const skills ={
    title: "My skills",
    description:"My technical skills focus on programming, software development, and DevOps fundamentals. I am passionate about building projects, learning modern development practices, and continuously improving my technical and problem-solving skills.",
skillList:[
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
    {
        icon:<SiTailwindcss />,
        name:"tailwind.css",
    },
    {
        icon:<SiNextdotjs />,
        name:"next.js",
    },
    {
        icon:<FaPhp/>,
        name:"PHP",
    },
    {
        icon:<FaAndroid />,
        name:"Android Studio",
    }, 
    {
        icon:<FaPython />,
        name:"Python",
    }, 
    {
        icon:<FaNodeJs />,
        name:"Node.js",
    },
    {
        icon:<FaDocker />,
        name:"Docker",
    },
    {
        icon:<SiFlutter />,
        name:"Flutter",
    }
 
    ]
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
import { FaJava } from "react-icons/fa";

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
                                     <span className="text-xs text-accent">{item.duration}</span>
                                        <h3 className="text-lg font-semibold text-white mt-2">{item.role}</h3>
                                        <div className="flex items-center gap-3">
                                        <span className="w-[6px] h-[6px] rounded-full
                                        bg-accent"></span>
                                        <p className="text-sm text-white/80">{item.company}</p></div>
                                        <p className="mt-2 text-white/70 text-justify">{item.details}</p>
                                        
                                                </li>
                                            );
                                            })}
                                        </ul>
                                        </ScrollArea>

                </div>
                </TabsContent>
                <TabsContent value ="education" className="w-full">
                                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                    </p>
                       <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {education.items.map((item,index)=> {
                                 return (
                                    <li key={index} className="bg-white/10 p-4 rounded-lg">
                                     <span className="text-xs text-accent">{item.duration}</span>
                                        <h3 className="text-lg font-semibold text-white mt-2">{item.degree}</h3>
                                        <div className="flex items-center gap-3">
                                        <span className="w-[6px] h-[6px] rounded-full
                                        bg-accent"></span>
                                        <p className="text-sm text-white/80">{item.institution}</p></div>
                                        <p className="mt-2 text-white/70 text-justify">{item.details}</p>
                                        
                                                </li>
                                            );
                                            })}
                                        </ul>
                                        </ScrollArea>

                </div>
                </TabsContent>
                <TabsContent value ="skills" className="w-full h-full">
                     <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[30px] text-cente xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                        </p>
                      </div>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 xl:gap-[40px]">
                        {skills.skillList.map((skill, index)=>{
                          return<li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                                rounded-xl flex justify-center items-center
                                group">
                                  <div className="text-6xl group-hover:text-accent
                                  transition-all duration-300">
                                    {skill.icon}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            </li>;
                        })}
                      </ul>
                     </div>
                </TabsContent>
                <TabsContent value ="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                    mx-auto xl:mx-0">
                        {about.info.map((item,index)=> {
                          return( <li key={index}>
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl:mx-0">{item.fieldValue}</span>
                          </li>
                          );
                        })}
                    </ul>
                  </div>

                </TabsContent>
            </div>
        </Tabs>
        </div> 
    </motion.div>  
    );
};

 export default Resume;