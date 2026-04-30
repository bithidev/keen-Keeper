import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-[#244D3F]">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-lg hover:bg-[#244D3F] transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;