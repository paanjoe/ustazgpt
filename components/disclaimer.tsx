import { NextPage } from "next";

const Disclaimer: NextPage = () => {
  return (
    <div className="my-5">
      <div
        className="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-bold">Disclaimer:</span>
          UstazGPT is an AI chat that is for informational purposes only and may
          not be 100% accurate. The information provided may not be complete or
          up-to-date and should not be relied upon as professional advice.
          UstazGPT and its affiliates cannot guarantee accuracy and shall not be
          held responsible for errors or inaccuracies. Please seek professional
          advice before making any decisions.
          <br />
          <br />
          <span className="font-semibold underline">
            If you think the answer is wrong, please help us by 'flagging' the
            answer in order to help this AI learn to be more accurate!
          </span>
        </div>
      </div>
    </div>
  );
};
export default Disclaimer;
