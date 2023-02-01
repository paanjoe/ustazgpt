import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MenuBar from "./menubar";
import MainBody from "./mainbody";
import Footer from "./footer";

const Home: NextPage = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
};

export default Home;
