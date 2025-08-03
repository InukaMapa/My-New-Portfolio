"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt , FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title:"Phone",
    description:"(+94)76 170 2500",
  },
    {
    icon: <FaEnvelope />,
    title:"Email",
    description:"inukashan123@gmail.com",
  },
    {
    icon: <FaMapMarkerAlt />,
    title:"Address",
    description:"No 132, Welagedara Uyana, Kurunegala",
  },

]

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-1 pb-10">
      <div className="flex flex-col xl:flex-row gap-12">

      <form className="w-full xl:w-[800px] xl:min-h-[800px] space-y-6 border border-white/10 rounded-lg p-6 bg-[#27272c] backdrop-blur">
              <h1 className="text-3xl font-bold mb-6 text-accent ">Let's Work Together.</h1>

        {/* Name */}
        <div>
          <label className="block mb-2 text-lg font-medium">Name</label>
          <Input
            placeholder="Enter your name"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-lg font-medium">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-2 text-lg font-medium">Phone Number</label>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
          />
        </div>

        {/* Services */}
        <div>
          <label className="w-full 
            text-lg
            placeholder:text-white/10
            focus:outline-none ">Services</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="uiux">UI/UX Design</SelectItem>
                <SelectItem value="logo">Logo Design</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-lg font-medium">Message</label>
          <Textarea
            placeholder="Write your message here..."
            rows={5}
            className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 text-left"
          />
        </div>

        {/* Submit */}
        <Button type="submit">Send Message</Button>

        
      </form>
      <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
        <ul className="flex flex-col gap-10">
          {info.map((item, index)=>{
            return(
              <li key={index} className=" flex items-center gap-6">
              <div className=" w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                <div className="text-[28px]">{item.icon}</div>
              </div>
              <div className="flex-1">
                <p className="text-white/60">{item.title}</p>
                <h3 className="text-xl">{item.description}</h3>
              </div>
            </li>
            );
          }
          )}
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Contact;
