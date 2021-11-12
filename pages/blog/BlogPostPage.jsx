import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import BlogActions from "./components/BlogActions";
import Comment from "./components/Comment";
import Image from "next/image";
import NewsLetter from "../../components/common/Newsletter";
export default function BlogPostPage() {
 return (
  <>
   <Navbar />

   <div className="pt-5">
    <div className="flex max-w-xl my-10 bg-white shadow rounded-lg overflow-hidden mx-auto">
     <div className="flex items-center w-full">
      <div className="w-full">
       <div className="flex flex-row mt-2 px-2 py-3 mx-3">
        <div className="w-auto h-auto rounded-full border-2 border-pink-500">
         <img
          className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
          alt="User avatar"
          src="/images/Developer.jpg"
         />
        </div>
        <div className="flex flex-col mb-2 ml-4 mt-2">
         <div className="text-gray-600 text-sm font-semibold flex-inline">
          West Africa
         </div>
         <div className="text-gray-500 font-thin text-xs flex-inline">
          • 30 seconds ago
         </div>
        </div>
       </div>
       <div className="border-b border-gray-100"></div>
       <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
        <Image
         src="/images/forest.jpg"
         width={1000}
         height={500}
         className="rounded-tl-lg rounded-tr-lg"
        />
       </div>
       <h2 className="text-gray-700 font-semibold capitalize text-xl mb-2 mx-3 px-2">
        greater heights is calling, i'm gonna pick up
       </h2>
       <div className="text-gray-600 text-sm mb-6 mx-3 px-2">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Esse aliquam assumenda porro officiis illum
        quidem consequuntur? Sapiente sunt aperiam beatae.
        Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ut, officia. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Tenetur consequatur
        quae at quaerat consequuntur.
       </div>

       <BlogActions />
       <Comment />
      </div>
     </div>
    </div>
   </div>
   <NewsLetter />
   <Footer />
  </>
 );
}
