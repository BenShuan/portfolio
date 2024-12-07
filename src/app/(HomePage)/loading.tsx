import React from 'react'
import icon from "@/app/icon.png";
import Image from 'next/image';
const LoadingPages = () => {
  return (
    <div className='relative size-full m-auto flex content-center justify-center items-center'>
    <Image src={icon} alt='laoding icon' className='flex-[0.5] animate-bounce size-1/2 aspect-square'/>
  </div>
  )
}

export default LoadingPages