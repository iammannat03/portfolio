import React from "react";
import Image from "next/image";
import { experienceMarquee } from "@/constants";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="mx-auto container justify-center items-center pt-20">
      <div className="flex justify-evenly items-center whitespace-nowrap">
        {experienceMarquee.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.id.toString()}
            width={item.width ? item.width : 100}
            height={100}
            className={`mx-4 object-contain`}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
