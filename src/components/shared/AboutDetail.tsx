import React from "react";
import { StarIcon } from "./Star";

const AboutDetail = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start gap-x-2">
      <StarIcon color="#366677" />
      <p className="tracking-[0.07px] text-sm leading-5">{text}</p>
    </div>
  );
};

export default AboutDetail;
