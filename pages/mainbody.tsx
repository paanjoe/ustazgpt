import { NextPage } from "next";
import { useState } from "react";
import Disclaimer from "../components/disclaimer";
import HeroTitle from "../components/herotitle";
import Questions from "../components/questions";

const MainBody: NextPage = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 bg-white dark:text-white">
        <div className="mx-10 max-w-screen-xl px-0 py-20 lg:block lg:h-screen">
          <div className="mx-auto max-w-3xl">
            <HeroTitle></HeroTitle>
            <Disclaimer></Disclaimer>
            <Questions></Questions>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBody;
