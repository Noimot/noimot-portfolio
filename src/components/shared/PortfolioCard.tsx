import React from "react";

const PortfolioCard = ({
  bgImage,
  paragraph,
  link,
  name,
}: {
  bgImage: string;
  paragraph: string;
  link?: string;
  name?: string;
}) => {
  return (
    <div className="h-full relative">
      <div
        className={`${bgImage} bg-no-repeat bg-center bg-cover rounded-xl h-64`}
      >
        <div className="text-black  px-4 shadow-text-custom bg-white/80 rounded-xl h-full flex flex-col gap-y-3 w-full">
          <h1 className="text-xl font-semibold pt-5">{name}</h1>
          <p className="text-justify">{paragraph}</p>
          <span className="pt-3">
            <a href={link} target="_blank" rel="noreferrer">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-5 h-5"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
