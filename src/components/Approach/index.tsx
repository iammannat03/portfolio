import React from "react";
import DesignDown from "../common/Design/DesignDown";
import DesignUp from "../common/Design/DesignUp";

type Props = {};

const Approach = (props: Props) => {
  return (
    <div className="bg-gray-100">
      <DesignDown />
      <div className="container mx-auto w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-bold">
          {/* How I plan the flow of a project. */}
          more coming soon...
        </h2>
      </div>
      <DesignUp />
    </div>
  );
};

export default Approach;
