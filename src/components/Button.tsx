import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode
}

export function Button (props:ButtonProps) {

  return(
    <button className="flex items-center gap-4 bg-gray-400 rounded-xl px-5 py-1 transition-colors hover:brightness-75 "
    {...props}>
      {props.icon}
      {props.title}
    </button>
  )
}