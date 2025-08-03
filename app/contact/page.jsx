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

const Contact = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-accent">Let's Work Together.</h1>
      <form className="space-y-6 border border-white/10 rounded-lg p-6 bg-[#27272c] backdrop-blur">
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <Input
            placeholder="Enter your name"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-2 text-sm font-medium">Phone Number</label>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none text-left"
          />
        </div>

        {/* Services */}
        <div>
          <label className="w-full 
            text-base 
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
          <label className="block mb-2 text-sm font-medium">Message</label>
          <Textarea
            placeholder="Write your message here..."
            rows={5}
            className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 text-left"
          />
        </div>

        {/* Submit */}
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;
