import Head from "next/head";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Index from "./blog";

export default function Home() {
 return (
  <>
   <Head>
    <title>VendorsBlog</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Navbar />
   <Index />
   <Footer />
   <style jsx global>{`
    html,
    body {
     padding: 0;
     margin: 0;
     font-family: "Libre Franklin", sans-serif;
    }

    h1,
    h2,
    h3 {
     font-family: "PT Serif";
     font-weight: 400;
    }

    * {
     box-sizing: border-box;
    }
   `}</style>
  </>
 );
}
