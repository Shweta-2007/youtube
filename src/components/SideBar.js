import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //This is known as early return
  if (!isMenuOpen) return null;

  //you can also use ternary operator here.

  return (
    <div className="shadow-lg p-5 w-48 ">
      <ul className=" border-gray-200 border-b-2 p-2">
        <li className="my-2">Home</li>
        <li className="my-2">Shorts</li>
        <li className="my-2">Subscriptions</li>
      </ul>
      <h1 className="font-bold my-2">You</h1>
      <ul className="border-gray-200 border-b-2 ">
        <li className="my-2">Your channel</li>
        <li className="my-2">History</li>
        <li className="my-2">Your videos</li>
        <li className="my-2">Watch Later</li>
      </ul>
      <h1 className="font-bold my-2">Subscriptions</h1>
      <ul className="border-gray-200 border-b-2">
        <li className="my-2">Music</li>
        <li className="my-2">Sports</li>
        <li className="my-2">Gaming</li>
        <li className="my-2">Margin</li>
      </ul>
      <h1 className="font-bold my-2">Explore</h1>
      <ul className="border-gray-200 border-b-2">
        <li className="my-2">Trending</li>
        <li className="my-2">Shopping</li>
        <li className="my-2">Music</li>
        <li className="my-2">Films</li>
        <li className="my-2">Live</li>
        <li className="my-2">Gaming</li>
        <li className="my-2">News</li>
        <li className="my-2">Sport</li>
      </ul>
      <h1 className="font-bold my-2">More from YouTube</h1>
      <ul className="border-gray-200 border-b-2">
        <li className="my-2">YouTube Premium</li>
        <li className="my-2">YouTube Studio</li>
        <li className="my-2"> Youtube Music</li>
        <li className="my-2">Youtube Kids</li>
      </ul>
      <ul className="border-gray-200 border-b-2">
        <li className="my-2">Settings</li>
        <li className="my-2">Report history</li>
        <li className="my-2">Help</li>
        <li className="my-2">Send feedback</li>
      </ul>
      <p className="my-2">
        About Press Copyright Contact us Creator Advertise Developers Terms
        Privacy Policy & Safety How YouTube works Test new features 2024 Google
        LLC
      </p>
    </div>
  );
};

export default SideBar;
