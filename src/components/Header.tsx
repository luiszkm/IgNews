import Link from "next/link";
import { useRouter } from "next/router";
import { ActiveLink } from "./ActiveLink";
import { ButtonSignIn } from "./ButtonSignIn";



export function Header() {
  const { asPath} = useRouter()
  
  return (
    <header className="w-full flex items-center justify-center px-6 py-6 bg-gray-800 text-white">
      <div className="w-full max-w-screen-lg flex items-center gap-8">

        <img src="" alt="logo ig.news" />

        <nav className="w-full flex items-center  justify-between">

          <ul className="flex items-center gap-5">
            <li className="relative text-gray-400  transition-colors 
             hover:text-white ">
              <ActiveLink href="/">
                <a >Home</a>
              </ActiveLink>
            </li>
            <li className="relative text-gray-400  transition-colors 
             hover:text-white ">
              <ActiveLink href="/posts">
                <a >Posts</a>
              </ActiveLink>
            </li>

          </ul>

          <ButtonSignIn />
        </nav>
      </div>
    </header>
  )
}