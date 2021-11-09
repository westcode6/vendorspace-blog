export default function BlogHeroSection() {
 return (
  <>
   <div
    className="hero min-4/2"
    style={{
     backgroundImage: "url(/images/typer.jpg)",
    }}
   >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="text-left pt-20 pb-10 hero-content text-neutral-content ">
     <div className="max-w-md">
      <h1 className="mb-5 text-5xl md:text-5xl font-bold">
       Vendors Blog
      </h1>
      <p className="mb-5">
       Lorem ipsum dolor sit amet consectetur adipisicing
       elit. Molestiae qui corrupti esse non.
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
