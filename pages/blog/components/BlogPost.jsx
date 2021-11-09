export default function BlogPost() {
 const Blog = [
  {
   post_image: "/images/blog-post1.jpg",
   post_title: "The incredible Developers",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Video",
   post_date: "16 mars 2021 - 6 min read",
  },

  {
   post_image: "/images/blog_post4.jpg",
   post_title: "VendorSpace partners association",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
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
   post_title: "The incredible Developers",
   description:
    "The new supercar is here Lorem ipsum dolor sit consectetur adipisicing elit new supercar is here, Lorem ipsum",
   profile_photo: "/images/Developer.jpg",
   profile_name: " God'spower Ovuota",
   post_type: "Article",
   post_date: "8 October 2021 - 4min read",
  },

  {
   post_image: "/images/blog_post4.jpg",
   post_title: "The incredible Developers",
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
   post_title: "The incredible Developers",
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
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Blog.map((post, index) => (
     <div
      className="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer m-auto"
      key={index}
     >
      <a href="#" className="w-full block h-full">
       <img
        alt="blog photo"
        src={post.post_image}
        className="max-h-40 w-full object-cover"
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
        <div className="flex flex-start items-center mt-5">
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
      </a>
     </div>
    ))}
   </div>
  </>
 );
}
