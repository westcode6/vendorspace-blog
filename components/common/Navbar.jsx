import Link from "next/link";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
export default function Navbar() {
 const [showMobileNav, setShowMobileNav] = useState(false);

 setTimeout(() => {
  setShowMobileNav(false);
 }, 4000);
 return (
  <>
   <header>
    <nav className="w-full fixed top-0 z-20 bg-white shadow-sm px-3 md:px-8 py-2 flex flex-col md:flex-row justify-between ">
     <div className="flex justify-between items-center">
      <Link href="/">
       <a className="flex items-center">
        <img
         src="/images/logo_main.png"
         className="h-10 object-cover"
         alt="page logo"
        />

        <h2 className="text-xl px-1 text-blue-600">
         VendorsBlog
        </h2>
       </a>
      </Link>

      <div className="relative ml-2 md:ml-10 hidden md:block">
       <input
        type="text"
        className="border border-gray-300 px-4 h-9 rounded md:w-96"
        placeholder="Search post"
       />

       <span className="absolute top-2 right-3">
        <RiSearch2Line />
       </span>
      </div>

      <button
       className="text-3xl text-black block md:hidden"
       onClick={() => setShowMobileNav((prev) => !prev)}
      >
       <HiOutlineMenuAlt4 />
      </button>
     </div>

     <ul
      className={`flex flex-col md:flex-row transition ease-out duration-500 md:block mt-10 md:mt-0 justify-center items-center  md:pt-2 ${
       showMobileNav ? "" : "hidden md:flex"
      }`}
     >
      <Link href="/">
       <a className="text-sm hover:text-blue-500 font-medium px-2">
        Post
       </a>
      </Link>
      <Link href="/">
       <a className="text-sm hover:text-blue-500 font-medium px-2">
        Notifications
       </a>
      </Link>

      <Link href="/">
       <a className="text-sm font-semibold px-2 py-2 mx-2 hover:bg-gray-100 text-blue-600 rounded-md">
        Log in
       </a>
      </Link>

      <Link href="/">
       <a className="text-sm text-white font-semibold px-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
        Create account
       </a>
      </Link>
     </ul>
    </nav>
   </header>
  </>
 );
}
