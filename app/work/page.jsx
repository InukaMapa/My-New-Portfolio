"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub   }   from "react-icons/bs";

import { Tooltip,
        TooltipContent, 
        TooltipProvider,
     } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects =[
    {
        num: "01",
        category: "Expense Tracker",
        title: " project 1",
        description:"A fully responsive Expense Tracker built with the MERN stack.This app helps users track their income and expenses, visualize financial insights with interactive charts, and even export data in Excel format.",
    stack: [{name: "MongoDB" }, { name: "Express.js" }, { name: "React" }, { name: "Node.js" }],
    image:"/assets/work/1.jpg",
    live: "",
    github: "https://github.com/InukaMapa/SpendWise",
    },
    {
        num: "02",
        category: " Sniper Car Servise",
        title: "project 2",
        description:"Sniper Car Care is an ongoing project for a Dubai client, developing a car service management system with POS functionality, camera-based vehicle detection, and automated messaging for vehicle owners.",
    stack: [{name: "Tailwind CSS" }, { name: "JavaScript" }, { name: "Node.js" }, { name: "MySQL" }, { name: "Express.js" }],
    image:"/assets/work/2.jpg",
    live: "",
    github: "",
    },
    {
        num: "03",
        category: " Melody Master ",
        title: "project 3",
        description:"Melody Masters – A full-stack e-commerce web application for a music instrument shop developed using PHP, MySQL, HTML, and CSS. This system supports customer shopping, digital downloads, inventory management, and admin operations.",
    stack: [{name: "HTML" }, { name: "Css" },{name:"MySQL" }, { name: "PHP"}],
    image:"/assets/work/3.jpg",
    live: "",
    github: "https://github.com/InukaMapa/melody-masters",
    },
    {
        num: "04",
        category: " Clothing E-commerce System ",
        title: "project 4",
        description:"A smart e-commerce ecosystem for small and medium apparel producers, built with MERN and powered by LSTM demand forecasting. It offers a storefront, analytics dashboard, inventory management, and consumer feedback to improve efficiency, decisions, engagement, and overall business performance.",
    stack: [{name: "MongoDB" }, { name: "Express.js" }, { name: "React" }, { name: "Node.js" }, { name: "Python" }],
    image:"/assets/work/4.jpg",
    live: "",
    github: "https://github.com/InukaMapa/E-commerce-Web-Clothing-Store-",
    },
    {
        num: "05",
        category: " Computer Inventory Management System ",
        title: "project 5",
        description:"An individual Flutter mobile application for a small inventory shop, implementing CRUD functionality with two user levels.",
    stack: [{name: "Flutter" }, { name: "Dart" }, { name: "Supabase" }],
    image:"/assets/work/5.jpg",
    live: "",
    github: "https://github.com/InukaMapa/Shop-Inventry",
    },
    {
        num: "06",
        category: " Flower Shop ",
        title: "project 6",
        description:"A complete flower shop web application built using HTML, CSS, JavaScript, PHP, and MySQL. This project allows users to browse flowers, book orders, give feedback, and contact the shop. Admins can manage flowers, feedback, orders, and users from a secure dashboard.",
    stack: [{name: "HTML " }, { name: "Css " }, { name: "PHP" },{name:"MySQL" },{name:"JavaScript" }],
    image:"/assets/work/6.jpg",
    live: "",
    github: "https://github.com/sandu20021111/flower_shop",
    },
    {
        num: "07",
        category: " Voice Assistant",
        title: "project 7",
        description:"Build an AI Voice Assistant Mobile App by using Expo React Native",
    stack: [{name: "Expo" }, ,{name: "React Native" }, { name: "OpenAI API" }, { name: "TypeScript" }],
    image:"/assets/work/7.jpg",
    live: "",
    github: "https://github.com/InukaMapa/Artifonia",
    },
    {
        num: "08",
        category: " AI-ChatBot",
        title: "project 8",
        description:"Using Html/CSS/JavaScript AI chat bot . It can input images also and give response based on the image",
    stack: [{name: "HTML " }, { name: "Css " }, { name: "JavaScript" }],
    image:"/assets/work/8.jpg",
    live: "",
    github: "https://github.com/InukaMapa/AI-Chat-Bot-Using-Html-CSS-JS-",
    },
    {
        num: "09",
        category: " Basic Car Game",
        title: "project 9",
        description:"A simple car game in Python using Pygame",
    stack: [{name: "Python" }, { name: "Pygame" }],
    image:"/assets/work/9.jpg",
    live: "",
    github: "https://github.com/InukaMapa/car-game",
    },
    {
        num: "10",
        category: " Food Ordering System",
        title: "project 10",
        description:"Admin Dashboard for a Restaurant Management System using HTML, CSS, JavaScript, and PHP.",
    stack: [{name: "HTML " }, { name: "Css " }, { name: "PHP" },{ name: "MySQL" },{ name: "JavaScript" }],
    image:"/assets/work/10.png",
    live: "",
    github: "https://github.com/InukaMapa/Foodorder",
    }
];

const Work = () => {
    const [project, setpProject] = useState(projects[0]);

    const handleSlideChange = (swiper) =>{
      //get current slide index
      const currentIndex = swiper.activeIndex;
      //update project state based on current slide index  
      setpProject(projects[currentIndex]);
    };



    return (
    <motion.section 
    initial ={{opacity:0}}
     animate={{
        opacity:1,
        transition:{ delay:2.4, duration: 0.4, ease: "easeIn"},
    }}
      className="min-h-[80vh] flex flex-col justify-center pv-12 xl:px-0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                 <div className="w-full xl:h-[460px] flex flex-col
                 xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/*outlin num*/}
                      <div className="text-8xl leading-none font-extrabold text-transparent
                      text-outline">
                        {project.num}
                        </div> 
                        {/*project category*/}
                        <h2 className="text-[42px] font-bold leading -none text-white
                        group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category}
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
                        {/*live project button*/}
                        <div className="flex items-center gap-4">
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                        bg-white/5 flex justify-center items-center group ">
                                            <BsArrowUpRight className="text-white text-3xl
                                            group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/*Github project button*/}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                        bg-white/5 flex justify-center items-center group ">
                                            <BsGithub className="text-white text-3xl
                                            group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                 </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    initialSlide={0}
                        >
                      {projects.map((project, index)=>{
                        return(
                            <SwiperSlide key={index} className="w-full">
                            <div className="h-[460px] relative group flex justify center
                             items-center bg-pink-50/20">
                                {/*overlay*/}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/
                                10 z-10"></div>
                                {/*image*/}
                                <div className="relative w-full h-full">
                                    <Image 
                                    src={project.image} 
                                    fill 
                                    className="object-cover"
                                    alt=""/>
                                </div>
                             </div>
                            </SwiperSlide>
                        );
                      })} 
                      {/*slider button*/}
                      <WorkSliderBtns 
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
/>
    
                    </Swiper>
                    </div>
            </div>
        </div>
    </motion.section>
    );
};

export default Work;
