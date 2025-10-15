import React from "react";
import LuffyImage from "public/flux_ani_1293165725.jpg";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={LuffyImage}
          fill
          alt="Monkey D Luffy"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 "/>
      </div>
      <div className="flex items-center justify-center pt-2">
        <h1 className="font-bold text-4xl">Anime Store</h1>
      </div>
    </div>
  );
};

export default HeroPage;
