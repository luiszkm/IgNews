import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";


interface ActiveLinkProps extends LinkProps{
  children: ReactElement
  
}


export function ActiveLink({children, ...rest}: ActiveLinkProps ){
  const { asPath} = useRouter()
  
  const active = asPath ===rest.href 
  return(
    <Link className="relative"
    {...rest}>
       {active ?
        <>
        {children}
        <div className="bg-yellow-500 w-full h-1 rounded-t-xl  relative top-8 "></div>
        </>
      : children
      }
     
    </Link>
  )
}