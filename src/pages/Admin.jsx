import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div
      className="flex justify-center items-center py-[200px] admin"
      
    >
      <Link to="https://capival-studio.sanity.studio" target="_blank">
        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xl px-5 py-5 text-center mr-2 mb-2">
          Login Here to Manage content
        </button>
      </Link>
    </div>
  );
}
