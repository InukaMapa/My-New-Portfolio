"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub   }   from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";


const projects =[
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description:
    " I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.",
    stack: [{name: "HTML 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image:"assets/work/thumb1.png",
    live: "",
    github: "",
    },
    {
        num: "01",
        category: "fullstack",
        title: "project 2",
        description:
    " I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.",
    stack: [{name: "Next.js" }, { name: "Tailwind.Css" }, { name: "Node.js" }],
    image:"assets/work/thum2.png",
    live: "",
    github: "",
    },
    {
        num: "01",
        category: "frontend",
        title: "project 3",
        description:
    " I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.",
    stack: [{name: "Next,js" }, { name: "Tailwind.Css" }],
    image:"assets/work/thumb3.png",
    live: "",
    github: "",
    },
];

const Work = () => {
    const [project, setpProject] = useState(projects[0]);
    return (
    <motion.section 
    initial ={{opacity:0}}
     animate={{opacity:1}}
      className="min-h-[80vh] flex flex-col justify-center pv-12 xl:px-0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                 <div className="w-full xl:h-[460px] flex flex-col
                 xl:justify-between order-2 xl:order-none">
                    <div>
                        {/*outlin num*/}
                      <div className="text-8xl leading-none font-extrabold text-transparent
                      text-outline">
                        {project.num}
                        </div> 
                        {/*project category*/}
                        <h2 className="text-[42px] font-bold leading -none text-white
                        group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category}project
                            </h2> 
                        {/*project description*/}
                        <p className="text-white/60">{project.description}</p>
                        {/*stack*/}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) =>{
                                return(
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/*remove the last coma*/}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                )
                            })}
                        </ul>
                        {/*border*/}
                        <div className="border border-white/20"></div>
                        {/*button*/}
                        <div>
                            
                        </div>
                    </div>
                 </div>
                <div className="w-full xl:w-[50%]">slider</div>
            </div>
        </div>
    </motion.section>
    );
};

export default Work;
