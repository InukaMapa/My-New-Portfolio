"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services =[
    {
        num:"01",
        title:"Web Development",
        description:"I build fast, responsive, and scalable websites using modern technologies. From simple landing pages to complex web applications, I ensure your site is functional, secure, and optimized for all devices. My focus is on clean code, user-friendly navigation, and smooth performance.",
        href:""
    },
    {
        num:"02",
        title:"UI/UX Design",
        description:"I design intuitive and visually appealing interfaces that deliver a seamless user experience. Every layout, color, and interaction is crafted with the end-user in mind — ensuring both aesthetic appeal and functional efficiency.",
        href:""
    },
    {
         num:"03",
        title:"Logo Design",
        description:"I  create unique, memorable logos that capture your brand’s identity and leave a lasting impression. My designs are simple yet powerful, ensuring they work across all mediums — from business cards to billboards.",
        href:""
        
    },
     {
         num:"04",
        title:"SEO",
        description:"I optimize websites to rank higher in search results, helping your business reach more customers organically. From keyword research to on-page optimization and technical SEO, I ensure your site is visible, fast, and search-engine friendly.",
        href:""
        
    },
    
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