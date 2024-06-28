import React, { useState } from "react";
import { StarIcon } from "./shared/Star";
import ImageProp from "./shared/ImageProp";
import TextField from "./shared/TextField";
import TextArea from "./shared/TextArea";
import Button from "./shared/Button";
import Socials from "./Socials";
import toast from "react-hot-toast";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mqazzvob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactInfo,
      }),
    });

    if (response.ok) {
      toast.success("Form submission successful!");
      // setStatus("Form submission successful!");
      setContactInfo({ ...contactInfo, email: "", name: "", message: "" });
    } else {
      toast.error("Form submission failed. Please try again.");
      // setStatus("Form submission failed. Please try again.");
    }
  };

  return (
    <section
      className="w-full mt-44  flex gap-x-5 px-10 lg:px-28 xl:px-40"
      id="contact"
    >
      <div className="space-y-8 w-full">
        <div className="mx-auto w-[80%]">
          <div className="flex items-center gap-x-2 pb-1">
            <StarIcon color="#007591" />
            <p className="text-[#007591] leading-5 text-base font-bold">
              Contact 📞
            </p>
            <StarIcon color="#007591" />
          </div>
          <h1 className="text-white font-bold tracking-[0.4px] leading-12 text-4xl capitalize">
            Reach Out, Let’s Make Magic Together!
          </h1>
        </div>
        <div className="space-y-8 lg:w-[80%] mx-auto">
          <div>
            <form action="" className="space-y-4" onSubmit={handleSubmit}>
              <TextField
                name="name"
                handleChange={handleChange}
                value={contactInfo.name}
                placeholder="Full Name"
                type="text"
              />
              <TextField
                name="email"
                handleChange={handleChange}
                value={contactInfo.email}
                placeholder="Email"
                type="email"
              />
              <TextArea
                name="message"
                handleChange={handleChange}
                value={contactInfo.message}
              />
              <div className="pt-6">
                <Button type="submit" text="Send Message" icon="/icons/arrow.svg"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
