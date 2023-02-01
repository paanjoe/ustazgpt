import { NextPage } from "next";
import { useState } from "react";

const MainBody: NextPage = () => {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch(error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }


  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-0 py-20 lg:block lg:h-screen">
          <div className="mx-auto max-w-3xl">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              UstazGPT
            </h1>

            <p className="mx-auto mt-4 sm:text-lg  sm:leading-relaxed">
              Made with ❤️
            </p>

<form onSubmit={onSubmit}>
<div className="mt-4">
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe your situation or ask your question.</label>
<textarea 
  id="message" 
  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  placeholder="Write your thoughts here..."
  value={animalInput}
  onChange={(e) => setAnimalInput(e.target.value)}></textarea>
</div>

<div className="mt-4">

<label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
<div className="relative mb-6">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
  <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com"/>
</div>

</div>

<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Ask Questions
  </span>
</button>
</form>

<div>{result}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBody;
