import React from 'react'

const ImageProp = ({src, className, imgClassName}: {src: string; className?: string; imgClassName?: string;}) => {
  return (
    <span className={`${className} w-10 h-10 rounded-full bg-white flex items-center justify-center`}>
        <img src={src} alt="" className={imgClassName} />
    </span>
  )
}

export default ImageProp;