import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <h1 className="text-8xl font-semibold text-orange-400">404</h1>

      <h2 className="text-2xl mt-4 urbanist">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-7 bg-black text-white px-8 py-3 hover:bg-orange-500 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
