import NewsLetter from "../../components/common/Newsletter";
import BlogHeroSection from "./components/BlogHeroSection";
import BlogPost from "./components/BlogPost";

export default function Index() {
 return (
  <>
   <BlogHeroSection />
   <main className="w-full bg-white pt-12 md:pt-16">
    <div className="header flex flex-col md:flex-row items-end justify-between mb-12">
     <div className="title px-4 md:px-8 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
       Lastest articles
      </h1>
      <p className="text-2xl font-light text-gray-400">
       All article are verified by 2 experts and valdiate by
       the CTO
      </p>
     </div>
    </div>

    {/* Blog Posts */}

    <BlogPost />
   </main>

   <NewsLetter />
  </>
 );
}
