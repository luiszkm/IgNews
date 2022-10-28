import { ReactNode } from "react"

interface FooterProps {
children?: ReactNode
}

export function Footer (props: FooterProps){

  return(
    <footer className="w-full bg-gray-700 h-16">
      <div className="w-full max-w-screen-lg text-white">
        {props.children}
      </div>
    </footer>
  )
}