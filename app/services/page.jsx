"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services =[
    {
        num:"01",
        title:"Web Development",
        description:"I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.",
        href:""
    },
    {
        num:"02",
        title:"UI/UX Design",
        description:"I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.",
        href:""
    },
    {
         num:"03",
        title:"Logo Design",
        description:"I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.",
        href:""
        
    },
     {
         num:"04",
        title:"SEO",
        description:"I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.",
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
                >
                    {services.map((service, index)=>{

                    })}
                </motion.div>
            </div>
 
         </section>
         );
    
};

export default Services;