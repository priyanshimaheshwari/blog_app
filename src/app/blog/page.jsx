import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css";


async function getData(){
  const res=await fetch('https://localhost:3000/api/posts' ,{
    cache:"no-store",
  });

  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {

  const data=await getData()
  return (
    <div className={styles.mainContainer} >
      {data.map(item=>(
        <Link href={`/blog/${id}`} className={styles.container} key={item.id}>
      
      
    <div className={styles.imgContainer}>
      <Image
        className={styles.img}
        fill={true}
        src={item.img}
        alt=""
      />
    </div>
    
    <div className={styles.content}>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={item.desc}>dec</p>
    </div>
    </Link>

))}
  </div>

  )
}

export default Blog