import React from 'react'

const AboutDetail = ({text}: {text: string}) => {
  return (
    <div className='flex items-start gap-x-2'>
        <span><img src="/icons/loader-icon.svg" alt="" /></span>
        <span><img src="/icons/circle-loader.svg" alt="" /></span>
        <p className='tracking-[0.07px] text-sm leading-5'>
       {text}
        </p>
    </div>
  )
}

export default AboutDetail