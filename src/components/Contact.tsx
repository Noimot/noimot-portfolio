import React from "react";
import { StarIcon } from "./shared/Star";
import ImageProp from "./shared/ImageProp";
import TextField from "./shared/TextField";
import TextArea from "./shared/TextArea";
import Button from "./shared/Button";
import Socials from "./Socials";

const Contact = () => {
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
            <form action="" className="space-y-4">
              <TextField placeholder="Full Name" type="text" />
              <TextField placeholder="Email" type="email" />
              <TextArea />
              <div className="pt-6">
                <Button text="Send Message" icon="/icons/arrow.svg" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
