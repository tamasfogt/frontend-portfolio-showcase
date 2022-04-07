import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="text-center">
        <div className=" text-2xl font-bold">Welcome</div>
        <div>
          <p>
            This is a sample project so you can check my code. You can find the
            github links below.
          </p>
          <p> The purpose of this website is not to look nice but to work.</p>
          <div className="mt-5">
            <p className="font-semibold">Frontend:</p>
            <p>Technologies: React, React Redux, React Saga, Tailwind</p>
            <a
              className="text-blue-500"
              href="https://github.com/tamasfogt/frontend-portfolio-showcase"
              target="_blank"
              rel="noreferrer"
            >
              Click here to visit
            </a>
          </div>
          <div className="mt-2">
            <p className="font-semibold">Backend:</p>
            <p>NodeJs, MongoDB</p>
            <a
              className="text-blue-500"
              href="https://github.com/tamasfogt/backend-portfolio-showcase"
              target="_blank"
              rel="noreferrer"
            >
              Click here to visit
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p className="my-4">To try the app please sign in or register</p>
          <Link
            to="/sign-in"
            className="w-full px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign in
          </Link>
          <Link
            to="/registration"
            className="w-full mt-2 px-4 py-2 text-indigo-600 text-base font-medium  hover:text-indigo-500"
          >
            Registartion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
