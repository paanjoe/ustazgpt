import { NextPage } from "next";
import Disclaimer from "../components/disclaimer";
import HeroTitle from "../components/herotitle";
import Questions from "../components/questions";

const MainBody: NextPage = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 bg-white dark:text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
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
