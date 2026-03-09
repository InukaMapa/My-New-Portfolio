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
import { useState } from "react";

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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporarily disabled - form data collected but no action taken
    console.log('Form submitted:', { firstname, lastname, email, phone, service, message });
    alert('Form submitted successfully! (Email functionality disabled for now)');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="flex flex-col xl:flex-row gap-8 w-full max-w-6xl">

      <form onSubmit={handleSubmit} className="w-full xl:w-[700px] space-y-4 border border-white/10 rounded-lg p-6 bg-[#27272c] backdrop-blur">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-3 text-accent">Let's work together.</h1>
          <p className="text-white/70">I'm available for freelance work or full-time collaboration.</p>
        </div>

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Firstname */}
          <div>
            <label className="block mb-2 text-sm font-medium">Firstname</label>
            <Input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter your firstname"
              className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
            />
          </div>

          {/* Lastname */}
          <div>
            <label className="block mb-2 text-sm font-medium">Lastname</label>
            <Input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Enter your lastname"
              className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
            />
          </div>
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 text-sm font-medium">Phone number</label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
            />
          </div>
        </div>

        {/* Services */}
        <div>
          <label className="block mb-2 text-sm font-medium">Select a service</label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="uiux">UI/UX Design</SelectItem>
                <SelectItem value="qa">QA & Testing</SelectItem>
                <SelectItem value="frontend">Frontend Development</SelectItem>
                <SelectItem value="backend">Backend Development</SelectItem>
                <SelectItem value="mobile">Mobile App Development</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message or project details..."
            rows={4}
            className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 text-left"
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="bg-accent text-primary hover:bg-accent/90 rounded-full px-8">Send message</Button>
      </form>
      <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
        <ul className="flex flex-col gap-6">
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
