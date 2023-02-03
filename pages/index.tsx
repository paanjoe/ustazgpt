import type { NextPage } from "next";
import MenuBar from "./menubar";
import MainBody from "./mainbody";
import Footer from "./footer";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css"
        rel="stylesheet"
      />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
      <NextSeo
        title="Home | UstazGPT"
        description="An AI Generative Pre-Text for referencing Islam related matter."
        canonical="https://www.ustazgpt.ai/"
      />
      <MenuBar></MenuBar>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
};

export default Home;
