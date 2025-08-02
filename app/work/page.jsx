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
            <div>text</div>
            <div>slider</div>
        </div>
        </div>
        </motion.section>
    );
};

export default Work;
