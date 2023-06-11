import React from 'react'
import Link from 'next/link'

const Button = ({text,url}) => {
  return (
      <Link href={url}>
    <button className='p-[20px] border-none bg-green-400 text-white rounded-lg cursor-pointer ' >{text}</button>
    </Link>
  )
}

export default Button