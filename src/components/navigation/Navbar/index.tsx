import CustomButton from "@/components/common/CustomButton";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center px-10">
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm font-semibold">
          mannatjaiswal03@gmail.com
        </span>
        <span>
          <CustomButton>Copy</CustomButton>
        </span>
        <span>
          <CustomButton>CV</CustomButton>
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 text-sm font-semibold">
        <span>LinkedIn</span>
        <span>/</span>
        <span>X</span>
        <span>/</span>
        <span>Instagram</span>
      </div>
    </div>
  );
};

export default Navbar;
