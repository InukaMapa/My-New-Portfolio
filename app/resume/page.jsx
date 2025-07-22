"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtnl5,
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
    description:""
    items: [
        {
            company:"Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2022 - present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer",
            duration: "2019 - 2020",
        },
     ],
};


const Resume = () => {
    return <div>resume page</div>;  
};
 export default Resume;