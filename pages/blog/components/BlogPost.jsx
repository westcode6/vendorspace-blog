import Link from "next/link";
import Image from "next/image";
import BlogActions from "./BlogActions";
export default function BlogPost() {
 const Blog = [
  {
   post_image: "/images/blog-post7.jpg",
   post_title: "Vendor the next big thing",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Video",
   post_date: "16 mars 2021 - 6 min read",
  },

  {
   post_image: "/images/wizzy.jpg",
   post_title: "Vendor the next big thing",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Backend.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Article",
   post_date: "22 july 2021 - 5 min read",
  },

  {
   post_image: "/images/blog_post2.jpg",
   post_title: "Vendors Dreamers dream",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Article",
   post_date: "24 Febuary 2022 - 5 min read",
  },

  {
   post_image: "/images/Backend.jpg",
   post_title: "The incredible Backend Developer",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Video",
   post_date: "20 mars 2029 - 6 min read",
  },

  {
   post_image: "/images/blog_post3.jpg",
   post_title: "Vendor the next big thing",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Article",
   post_date: "8 October 2021 - 4min read",
  },

  {
   post_image: "/images/blog_post4.jpg",
   post_title: "Vendor the next big thing",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Article",
   post_date: "2 july 2022 - 2 min read",
  },

  {
   post_image: "/images/Developer.jpg",
   post_title: "The incredible Frontend Developer",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Backend.jpg",
   profile_name: "Desmond Emejevu",
   post_type: "Video",
   post_date: "25 march 2022 - 6 min read",
  },

  {
   post_image: "/images/blog-post1.jpg",
   post_title: "The incredible wizzy pounds",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Video",
   post_date: "14 september 2021 - 8 min read",
  },

  {
   post_image: "/images/blog_post6.jpg",
   post_title: "Vendor the next big thing",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Article",
   post_date: "22 december 2020 - 6 min read",
  },
 ];
 return (
  <>
   <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 py-8 gap-5">
    {Blog.map((post, index) => (
     <Link href="/blog/BlogReview/">
      <article className=" shadow-md  hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg bg-white p-2">
       <header className="mb-2">
        <Image
         src={post.post_image}
         width={1000}
         height={450}
         className="object-cover rounded-tl-lg rounded-tr-lg"
        />
       </header>

       <div className="px-1 pb-2">
        <div className="flex justify-between items-center">
         <span className="font-light text-gray-600">
          {post.post_date}
         </span>
         <a
          className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
         >
          {post.post_type}
         </a>
        </div>
        <div className="mt-2">
         <h3
          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
          href="#"
         >
          {post.post_title}
         </h3>
         <p className="mt-2 text-gray-600">
          {post.description}
         </p>
        </div>
        <div className="flex justify-between items-center mt-4">
         <div>
          <a className="flex items-center" href="#">
           <img
            className="w-10 h-10 object-cover rounded-full hidden sm:block"
            src={post.profile_photo}
            alt="avatar"
           />
           <span className="text-gray-700 pl-2 font-thin">
            {post.profile_name}
           </span>
          </a>
         </div>
         <Link href="/">
          <a className="text-blue-600 hover:underline">
           Read more
          </a>
         </Link>
        </div>
       </div>
      </article>
     </Link>
    ))}
   </div>
   {/* 
      <div
       className="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer m-auto"
       key={index}
      >
       <div className="w-full block h-full">
        <Image
         src={post.post_image}
         className="object-cover"
         width={1000}
         height={450}
         alt="blog photo"
        />

        <div className="bg-white dark:bg-gray-800 w-full p-4">
         <p className="text-blue-500 text-md font-semibold">
          {post.post_type}
         </p>
         <h3 className="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {post.post_title}
         </h3>
         <p className="text-gray-400 dark:text-gray-300 font-light text-md">
          {post.description}
         </p>
         <div className="flex  items-center mt-5">
          <a href="#" className="block relative">
           <img
            alt="profil"
            src={post.profile_photo}
            className="mx-auto object-cover rounded-full h-10 w-10 "
           />
          </a>
          <div className="flex flex-col justify-between ml-4 text-sm">
           <p className="text-gray-800 dark:text-white">
            {post.profile_name}
           </p>
           <p className="text-gray-400 dark:text-gray-300">
            {post.post_date}
           </p>
          </div>
         </div>
        </div>
       </div>
      </div> */}
  </>
 );
}
