import Document, {
 Html,
 Head,
 Main,
 NextScript,
} from "next/document";

class MyDocument extends Document {
 static async getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
 }

 render() {
  return (
   <Html>
    <Head>
     {/* body font */}
     <link
      href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200&display=swap"
      rel="stylesheet"
     />

     {/* Heading font */}
     <link
      href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@500&display=swap"
      rel="stylesheet"
     />
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
