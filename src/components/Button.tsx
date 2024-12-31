import React from "react";
import { IconLoader2 as Loader2 } from "@tabler/icons-react"; 
import { TitleProps, IconProps } from "../types/Types";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

function Button({
  children,
  isLoading = false,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center font-bold  px-4 py-3 rounded-sm y text-white hover:bg-orange-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Loader2 className="animate-spin" width={20} height={20} /> : children}
    </button>
  );
}


function Title({ children, className = "" }: TitleProps) {
  return <span className={`text-sm font-medium ${className}`}>{children}</span>;
}


function Icon({ icon: IconComponent, className = "" }: IconProps) {
  return <IconComponent className={`text-lg mr-4 ${className}`} />;
}


Button.Title = Title;
Button.Icon = Icon;

export { Button };
