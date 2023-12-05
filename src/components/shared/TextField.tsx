import React from 'react'

const TextField = ({placeholder, type}: {placeholder: string; type: string;}) => {
  return (
    <div className={`w-full border-[#86A3AD] border-[0.5px] border-solid rounded-3xl`}>
        <input type={type} className='w-full border-0 bg-inherit outline-0 p-4 focus:outline-0' placeholder={placeholder} />
    </div>
  )
}

export default TextField