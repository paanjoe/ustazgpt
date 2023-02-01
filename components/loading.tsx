import { NextPage } from "next";

const Loading:NextPage = () => {
    return(
        <div className="mt-5 text-red-500 dark:text-yellow-300">
        Finding your answer... please wait...
      </div>
    )
}

export default Loading;