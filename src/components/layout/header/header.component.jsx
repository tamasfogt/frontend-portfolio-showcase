import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "../../../redux/user/user-saga.actions";

import { selectCurrentUser } from "../../../redux/user/user.selector";
import MenuItem from "../../menu-item/menu-item.component";

import { ReactComponent as BarsSvg } from "../../../assets/bars.svg";
import { ReactComponent as CloseSvg } from "../../../assets/close.svg";

import { Link } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const mobileMenu = (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div className="text-black">My portfolio</div>
            <div className="-mr-2">
              <button
                onClick={() => setMenuVisible(false)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                <CloseSvg height="20"></CloseSvg>
              </button>
            </div>
          </div>
        </div>
        <div className="pb-5 pt-2 px-5 space-y-6">
          {currentUser ? (
            <div className=" text-black">
              <div className="mb-3 text-center font-semibold">
                Hello {currentUser?.name}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  dispatch(signOutStart());
                  setMenuVisible(false);
                }}
              >
                Sign out
              </div>
            </div>
          ) : (
            <div>
              <Link
                onClick={() => setMenuVisible(false)}
                className="w-full px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                to="/sign-in"
              >
                Sign in
              </Link>
              <Link
                onClick={() => setMenuVisible(false)}
                to="/registration"
                className="w-full mt-2 px-4 py-2 text-indigo-600 text-base font-medium  hover:text-indigo-500"
              >
                Registration
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col ">
      <div className=" bg-gray-800 w-full text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <MenuItem link="/portfolio">My Portfolio</MenuItem>
            </div>

            <div className="mx-1 -my-2 md:hidden">
              <button
                onClick={() => setMenuVisible(true)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <BarsSvg height="20"></BarsSvg>
              </button>
            </div>

            <div className="hidden md:flex">
              {currentUser ? (
                <div className="flex ">
                  <div className="px-2">Hello {currentUser?.name}</div>
                  <MenuItem link="/portfolio">Portfolio</MenuItem>

                  <div onClick={() => dispatch(signOutStart())}>Sign out</div>
                </div>
              ) : (
                <MenuItem link="/sign-in">Please Sign in </MenuItem>
              )}
            </div>
            {menuVisible ? mobileMenu : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
