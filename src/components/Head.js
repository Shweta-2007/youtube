import React from "react";
import { MENU_URL, USER_URL, YOUTUBE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          src={MENU_URL}
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img src={YOUTUBE_URL} alt="Youtube logo mx-2" className="h-8" />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100 ">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img src={USER_URL} alt="user" className="h-8" />
      </div>
    </div>
  );
};

export default Head;
