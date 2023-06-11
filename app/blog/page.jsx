import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css";
import Button from '@/components/Button'

const Blog = () => {
  return (
    <div className={styles.mainContainer} >
      <Link href="/blog/testId" className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        className={styles.img}
        fill={true}
        src=''
        alt=""
      />
    </div>
    
    <div className={styles.content}>
      <h1 className={styles.title}>Test</h1>
      <p className={styles.desc}>Desc</p>
    </div>
    </Link>

    <Link href="/testId" className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        className={styles.img}
        fill={true}
        src=''
        alt=""
      />
    </div>
    
    <div className={styles.content}>
      <h1 className={styles.title}>Test</h1>
      <p className={styles.desc}>Desc</p>
    </div>
    </Link>

    <Link href="/testId" className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        className={styles.img}
        fill={true}
        src=''
        alt=""
      />
    </div>
    
    <div className={styles.content}>
      <h1 className={styles.title}>Test</h1>
      <p className={styles.desc}>Desc</p>
     
    </div>
    </Link>
  </div>

  )
}

export default Blog