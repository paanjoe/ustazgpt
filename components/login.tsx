import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  
  if (session) {
    return (
      <>
      {/* <button onClick={() => callAPI()}> sadsa</button> */}
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={session.user?.image!}
            alt=""
          />
          <div className="font-medium text-gray-900 dark:text-white">
            <div>{session.user?.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {session.user?.email}
            </div>
            <button
              className="underline text-gray-900 dark:text-white hover:text-slate-300"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <button
        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        onClick={() => signIn()}
      >
        <svg
          className="w-4 h-4 mr-2 -ml-1"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Sign in with Google
      </button>
    </>
  );
}
