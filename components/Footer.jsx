import React from 'react'
import Image from 'next/image'

const Footer = () => {

  return (
    <div className='h-[50px] flex items-center justify-between text-sm'>
      <div className=' '>@2023 Mania.  All rights reserved.</div>
      <div className='flex gap-3 items-center'>
         <Image src="/1.png" width={15} height={15} alt='Facebook' className='opacity-60 cursor-pointer'/>
         <Image src="/2.png" width={15} height={15} alt='Instagram' className='opacity-60 cursor-pointer'/>
         <Image src="/3.png" width={15} height={15} alt='Twitter' className='opacity-60 cursor-pointer'/>
         <Image src="/4.png" width={15} height={15} alt='Youtube' className='opacity-60 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Footer