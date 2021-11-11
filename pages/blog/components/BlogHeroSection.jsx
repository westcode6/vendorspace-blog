export default function BlogHeroSection() {
 return (
  <>
   <div
    className="hero min-4/2"
    style={{
     backgroundImage: "url(/images/blogger.jpg)",
    }}
   >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="text-left md:text-center pt-28 md:pt-32 pb-10 md:pb-16 hero-content text-neutral-content ">
     <div className="max-w-md">
      <h1 className="mb-5 text-4xl md:text-5xl font-bold">
       Vendors Blog
      </h1>
      <p className="mb-5">
       If you're looking for random paragraphs, you've come
       to the right place. When a random word or a random
       sentence isn't quite enough
      </p>
      <button className="btn bg-blue-600">
       Get Started
      </button>
     </div>
    </div>
   </div>
  </>
 );
}
