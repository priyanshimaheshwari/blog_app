import Image from "next/image"
import Button from "../components/Button/Button";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-20">
      <div className="flex flex-col gap-10">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#194c33] to-[#bbb] text-7xl font-bold">
          Better design for your digital products.
        </h1>
        <p className="text-2xl">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className="">
        <Image src={Hero} alt="" className="animate-bounce object-contain w-full h-96" />
      </div>
    </div>
  );
}
