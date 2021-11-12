import {
 FaInstagram,
 FaFacebookF,
 FaTwitter,
} from "react-icons/fa";
export default function Footer() {
 return (
  <>
   <footer className="bg-gray-50 pt-8 pb-8 lg:pt-10">
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
     <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
      <li className="w-1/2 md:w-1/3 lg:w-1/3">
       <div className="text-center">
        <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
         Community
        </h2>
        <ul>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Elements</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Forms</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Commerces</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Navigation</a>
         </li>
        </ul>
       </div>
      </li>
      <li className="w-1/2 md:w-1/3 lg:w-1/3">
       <div className="text-center">
        <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
         Contacts
        </h2>
        <ul>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Github</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Facebook</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Twitter</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">LinkedIn</a>
         </li>
        </ul>
       </div>
      </li>
      <li className="w-1/2 md:w-1/3 lg:w-1/3">
       <div className="text-center">
        <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
         Events
        </h2>
        <ul>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Podcast</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Talkshows</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Social moves</a>
         </li>
         <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <a href="#">Frenchys</a>
         </li>
        </ul>
       </div>
      </li>
     </ul>
     <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
      <a href="#" className="text-lg hover:text-gray-900">
       <FaFacebookF />
      </a>
      <a href="#" className="text-lg hover:text-gray-900">
       <FaTwitter />
      </a>

      <a href="#" className="text-lg hover:text-gray-900">
       <FaInstagram />
      </a>
      <a href="#">
       <svg
        width="20"
        height="20"
        fill="currentColor"
        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
       </svg>
      </a>
     </div>
    </div>
   </footer>
  </>
 );
}
