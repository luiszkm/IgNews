import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode
  primary?: boolean
  priceId?: string
}

export function Button(props: ButtonProps) {

  return (
    <button className={props.primary ?

      "flex items-center gap-4 bg-yellow-500 rounded-full px-12 py-3 mt-5 text-black font-bold transition-colors hover:brightness-75"
      :
      "flex items-center gap-4 bg-gray-400 rounded-xl px-5 py-1 transition-colors hover:brightness-75"}

      {...props}>
      {props.icon}
      {props.title}
    </button>
  )
}