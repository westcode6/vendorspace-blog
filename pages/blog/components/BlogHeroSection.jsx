export default function BlogHeroSection() {
 return (
  <>
   <div
    className="w-full bg-center bg-cover h-96"
    style={{ backgroundImage: "url(/images/typer.jpg)" }}
   >
    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
     <div className="text-center max-w-xl mx-auto pt-12 px-4">
      <h1 className="text-4xl font-semibold text-white uppercase lg:text-3xl">
       {" "}
       Vendors Blog
      </h1>

      <p className="py-4 text-gray-100">
       If you're looking for random paragraphs, you've come
       to the right place. When a random word or a random
       sentence isn't quite enough
      </p>
      <div>
       <button className="px-6 py-3 mt-4 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-blue-600  lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        Get started
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
