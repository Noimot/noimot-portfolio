import React, { forwardRef, LegacyRef } from "react";

interface IPortfolioCard {
  bgImage: string;
  paragraph: string;
  link?: string;
  name?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const PortfolioCard = forwardRef<HTMLDivElement, IPortfolioCard>(
  (
    {
      bgImage,
      paragraph,
      link,
      name,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    return (
      <div className="h-full">
        <div
          className={`${bgImage} bg-center bg-no-repeat bg-cover w-full rounded-xl h-64 relative`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div ref={ref} className="absolute inset-0">
            <div className="text-white px-4 shadow-text-custom bg-black/90 rounded-xl h-full flex flex-col gap-y-3 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <h1 className="text-xl font-semibold pt-5">{name}</h1>
                <p className="text-justify pt-10">{paragraph}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PortfolioCard;
