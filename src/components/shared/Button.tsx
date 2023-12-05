import React from 'react'

const Button = ({text, icon, className}: {text: string; icon: string; className?: string}) => {
  return (
       <button
          type="button"
          className={`w-full border-[1.5px] border-dashed border-white rounded-xl flex items-center justify-center gap-x-2 px-6 py-4 text-white capitalize ${className}`}
        >
          <span className="tracking-[0.16px] leading-5 font-medium text-base">
            {text}
          </span>
          <span>
            <img src={icon} alt="" />
          </span>
        </button>
  )
}

export default Button