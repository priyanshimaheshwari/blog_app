import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div className="">
      <div className="w-full relative h-96">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover grayscale"
        />
        <div className="absolute bottom-5 left-5 p-2 bg-[#53c28b] text-white">
          <h1 className="text-lg">Digital Storytellers</h1>
          <h2 className="text-md">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex-1 flex flex-col mt-12 gap-[30px]">
          <h1 className="font-bold text-4xl">Who Are We?</h1>
          <p className="font-absolute text-lg text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 flex flex-col mt-12 gap-[30px]">
          <h1 className="font-bold text-4xl">What We Do?</h1>
          <p className="font-absolute text-lg text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <button  className="text-white bg-[#53c28b] p-2 rounded-xl "  ><a href="/contact" >Contact</a></button>
        </div>
      </div>
    </div>
  );
};

export default About;
