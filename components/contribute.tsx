import { NextPage } from "next";

const Contribute: NextPage = () => {
  return (
    <div className="mt-5 text-gray-900 dark:text-white">
      If you think this site is useful, please consider to{" "}
      <a
        href="https://www.buymeacoffee.com/paanjoe"
        className="text-cyan-400 font-bold underline"
        target={"_blank"}
      >
        Sponsor
      </a>{" "}
      in order to maintain this site (100% of the money will be used for this
      site). JazakAllahu Khayran 🙏.
    </div>
  );
};

export default Contribute;
