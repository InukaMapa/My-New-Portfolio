"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services =[
    {
        num:"01",
        title:"Web Development",
        description:"I develop responsive and scalable web applications using modern technologies such as HTML, CSS, JavaScript, React, Node.js, PHP, Express.js, and REST APIs, along with tools like Git, GitHuband Tailwind CSS to build efficient and user-friendly websites.",
        href:""
    },
    {
        num:"02",
        title:"Automation ",
        description:"I create automation solutions to simplify repetitive tasks and improve workflow efficiency using  tools like Selenium, APIs to automate data processing and system operations.",
        href:""
    },
    {
         num:"03",
        title:"Database Management",
        description:"I design and manage secure, well-structured databases using MySQL, MongoDB & Supabase applying SQL optimization, indexing, and backup strategies to ensure reliable and efficient data management.",
        href:""
        
    },
     {
         num:"04",
        title:"Mobile App Development",
        description:"I build modern mobile applications using Flutter and Dart, integrating REST APIs, Supabase to create fast, scalable, and user-friendly cross-platform mobile apps.",
        href:""
        
    },
     {
         num:"05",
        title:"DevOps Basics",
        description:"I apply fundamental DevOps practices using Docker, Git, GitHub Actions and cloud platforms like Vercel and Render to automate deployment processes and maintain efficient development workflows.",
        href:""
        
    },
    {
         num:"06",
        title:"System Development",
        description:"Basic knowledge in system development, including POS systems, understanding workflows, handling data, and efficient operations.",
        href:""
        
    }
    
    

    

    

    
];

import { motion } from "framer-motion";

const Services  = () => {
    return(
         <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{ delay :2.4, duration: 0.4, ease:"easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index)=>{
                    return(
                        <div key={index} 
                        className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline 
                                text-transparent group-hover:text-outline-hover transition-all
                                duration-500 ">
                                    {service.num}
                                    </div>
                                <Link href={service.href} className="w-[70px] h-[70px]
                                rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex
                                justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            <h2 className ="text-[42px] font-bold leading none text-white
                            group-hover:text-accent transition-all duration-500">
                                {service.title}
                                </h2>
                             <p className="text-white/60">{service.description}</p>
                            <div className="border-b border-white/20 w-full">
                            </div>
                        </div>
                    );
                    })}
                </motion.div>
            </div>
 
         </section>
         );
    
};

export default Services;