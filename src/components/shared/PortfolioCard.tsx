import React, { forwardRef } from "react";

interface IPortfolioCard {
  bgImage: string;
  paragraph: string;
  link?: string;
  name?: string;
  skills?: string[];
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
      skills,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    const handleClick = () => {
      if (link) window.open(link, "_blank", "noreferrer");
    };

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={`h-full rounded-xl border border-[#D1D9DE] dark:border-[#596D73] bg-[#FFFFFF] dark:bg-[#0a2a33] overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${link ? "cursor-pointer" : ""}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Image */}
        <div
          className={`${bgImage} bg-center bg-no-repeat bg-cover w-full h-52 rounded-t-xl`}
        />

        {/* Content */}
        <div className="p-5 space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-wide text-[#1A1A2E] dark:text-white">
            {name}
          </h3>
          <p className="text-sm leading-relaxed text-[#4A5568] dark:text-[#C2D1D6]">
            {paragraph}
          </p>

          {/* Tech badges */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-dashed border-[#D1D9DE] dark:border-[#596D73] text-[#4A5568] dark:text-[#C2D1D6] rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default PortfolioCard;
