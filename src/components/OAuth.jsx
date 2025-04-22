import React from "react";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  return (
    <button className="flex w-full items-center justify-center rounded bg-red-700 px-7 py-3 text-sm font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-lg active:bg-red-900 active:shadow-lg">
      <FcGoogle className="mr-2 rounded-full bg-white text-2xl" />
      Continue with Google
    </button>
  );
}

export default OAuth;
