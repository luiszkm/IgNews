



export function Header() {

  return (
    <header className="w-full flex items-center justify-center px-6 py-6 bg-gray-800 text-white">
      <div className="w-full flex items-center gap-8">

        <img src="" alt="logo ig.news" />

        <nav className="w-full flex items-center  justify-between">

          <ul className="flex items-center gap-5">
            <li className="relative text-gray-400  transition-colors 
             hover:text-white ">
              <a href="#">Home</a>
            </li>

          </ul>

          <button>Github</button>
        </nav>
      </div>
    </header>
  )
}