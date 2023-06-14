import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css";
import Button from '@/src/components/Button/Button';


const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt=""
        className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award winning digital experiences
        </h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut maxime dolore, molestias, blanditiis vel debitis cum quis tempora, nam rem aperiam odio alias iusto et aut quia magnam perspiciatis necessitatibus repellendus. Necessitatibus amet pariatur facere animi quis quia impedit sapiente eius, odio dicta autem inventore itaque laborum culpa officiis dolores debitis ratione delectus sint labore?
             <br />
             <br />
              Nam excepturi deserunt repudiandae praesentium distinctio, voluptates facilis? Quisquam quam possimus sequi aliquam id quidem. Fugiat, quis vel eaque a in, doloribus quae aut ea consequuntur itaque dolorem perferendis, odit assumenda doloremque expedita cumque.</p>
            </div>
            <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />
                <br/>Illum sapiente voluptatum nesciunt odit assumenda nobis labore, dolore sequi porro numquam qui, debitis quasi culpa nemo fugiat soluta ex laborum impedit esse dignissimos. Amet, iusto.</p>
                <Button url="contact" text="Contact" />
         </div>
       </div>
    </div>
  )
}

export default About