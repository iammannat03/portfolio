import Navbar from "@/components/navigation/Navbar";
import React from "react";
import HeroMain from "../HeroMain";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full border p-10 rounded-b-[80px] bg-gray-100">
      <Navbar />
      <HeroMain />
    </div>
  );
};

export default Hero;
