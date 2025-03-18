import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const CustomButton = ({
  children,
  className,
  onClick,
  disabled,
}: Props) => {
  return (
    <Button
      className={`bg-white hover:bg-gra hover:shadow-md transition-all duration-200 text-black shadow-none ring-0 rounded-full px-8 py-2 text-xs font-semibold ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
