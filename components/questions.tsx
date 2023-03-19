import { NextPage } from "next";
import { useEffect, useState } from "react";
import Contribute from "./contribute";
import Loading from "./loading";
import Login from "./login";
import { useSession } from "next-auth/react";

const Questions: NextPage = () => {
  const [questionsInput, setQuestionsInput] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [isFlagged, setFlagged] = useState(false);
  let t: String = '';

  // Store login infos
  const userModel = session?.user;
  const storeLogin = async () => {
    try {
        const res = await fetch(
            `/api/store`,
            {
                method: 'POST',
                body: JSON.stringify({userModel}),
                headers: { 'Content-Type': 'application/json'}
            }
        );
    } catch (err) {
        console.log(err);
    }
  };

  // Flag response
  const ansModel = {
    questions: questionsInput,
    answer: result,
    email: session?.user?.email
  }

  const flagAnswer = async () => {
    try {
      const res = await fetch(`/api/flag`,
      {
        method: 'POST',
        body: JSON.stringify({ansModel}),
        headers: { 'Content-Type': 'application/json'}
      }).then(() => {
        setFlagged(true);
      });
    } catch(err) {
      console.log(err);
    }
  }
  
  // Send request
  async function onSubmit(event: any) {
    fetching(true);
    event.preventDefault();
    try {
      storeLogin();
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questions: questionsInput }),
      });

      const data = await response.json();

      if (response.status !== 200) {
        fetching(false);
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      if (response.status === 200) {
        fetching(false);
      }

      setResult(data.result);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  // Set Loading
  async function fetching(loadBoolean: boolean) {
    try {
      setLoading(loadBoolean);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  function test() {
    if (session !== null && questionsInput.length > 0) {
      t = '';
      return false;
    } else if (session === null && questionsInput.length === 0) {
      t = 'cursor-not-allowed';
      return true;
    } else {
      t = 'cursor-not-allowed';
      return true;
    }
  }

  return (
    <>
    <Login></Login>
      <form onSubmit={onSubmit}>
        <div className="mb-4 max-h-screen">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <span className="text-xl">🧐 </span>Describe your situation or ask
            your question.
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={questionsInput}
            onChange={(e) => setQuestionsInput(e.target.value)}
          ></textarea>
        </div>
        <button
          disabled={test()}
          className="disabled relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className={`${t} relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0`}>
            Ask Questions <span className="text-md">⚡</span>
          </span>
        </button>
      </form>
      <div>
        {isLoading === true ? <Loading></Loading> : <></>}
        {result !== undefined && isLoading === false ? (
          <>
            {" "}
            <Contribute></Contribute>
            <h1 className="font-bold text-gray-900 dark:text-white text-3xl my-5">
              Answer:
            </h1>
            <div
              className="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
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
              <div>{result}</div>
            </div>
            <button onClick={() => flagAnswer()} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            🏳️ Flag This Answer
            </button>
          </>
        ) : (
          <></>
        )}
        { isFlagged === true ? (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span className="font-medium">Answer Flagged!</span> We have successfully flagged your answer! Thank you for your contribution. 
      </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Questions;
