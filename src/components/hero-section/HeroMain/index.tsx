import CustomButton from "@/components/common/CustomButton";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const HeroMain = (props: Props) => {
  return (
    <div className="mx-auto container w-full flex flex-col justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="relative">
          <Image
            src="/images/pic.jpg"
            alt="my-pic"
            height={180}
            width={180}
            className="rounded-full border-white border-4"
          />
          <div className="flex gap-1 justify-center items-center bg-white px-4 py-2 rounded-full absolute top-10 -right-24 -rotate-[10deg]">
            <span className="text-xs">Mannat Jaiswal</span>
            <span className="text-xs">👋🏻</span>
          </div>
        </div>
        <div className="text-4xl font-bold w-96 text-center">
          Building digital products, brands, and experience.
        </div>
        <CustomButton className="bg-black text-white px-8 py-6">
          Latest Shots
          <TrendingUp className="w-4 h-4" />
        </CustomButton>
      </div>
    </div>
  );
};

export default HeroMain;
