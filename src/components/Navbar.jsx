import Button from "./Button";
import Logo from "/images/logo.svg";

export default function Navbar() {
  const openMobileMenu = () => {

    document.querySelector('#mobileMenu').classList.toggle('hidden');
   

  }
  return (
    <div className="relative">
      <div className="flex justify-between py-8 px-5  md:px-18 lg:px-16">
        <header className="flex space-x-10 justify-center items-center">
          <img src={Logo} alt="Shortly" />
          <nav className="hidden md:block">
            <ul className="flex space-x-6 justify-center items-center">
              <li className="text-sm font-extrabold text-[hsl(0,0%,75%)]  hover:text-black"> <a href="#">Features</a> </li>
              <li className="text-sm font-extrabold text-[hsl(0,0%,75%)]  hover:text-black ">  <a href="#">Pricing</a>  </li>
              <li className="text-sm font-extrabold text-[hsl(0,0%,75%)]  hover:text-black">  <a href="#">Resources</a>  </li>
            </ul>
          </nav>
        </header>
        <div className="space-x-7 hidden md:block">
          <button className="text-sm font-extrabold text-[hsl(0,0%,75%)]  hover:text-black "> Login </button>
          <Button>Sign Up</Button>
        </div>
        <span onClick={openMobileMenu} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-list size-7 cursor-pointer text-gray-400 font-extrabold" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </span>
      </div>
      {/* mobile menu */}
      <div id="mobileMenu" className="bg-[#3b3054] text-center py-5 md:hidden px-5 rounded-lg mx-5 absolute w-11/12">
        <ul className="space-y-4">
          <li className="text-white text-lg font-bold">Features</li>
          <li className="text-white text-lg font-bold">Pricing</li>
          <li className="text-white text-lg font-bold">Resources</li>
        </ul>
        <hr className="border-1 border-[rgba(219,207,248,0.65)] w-11/12 mx-auto my-5" />
        {/* buttons */}
        <div className="space-y-4 mt-5 flex flex-col">
          <button className="text-white text-lg font-bold">Login</button>
          <Button>Sign Up</Button>
        </div>
      </div>

    </div>
  )
}
