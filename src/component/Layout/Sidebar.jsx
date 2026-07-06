import {
  ArrowRightStartOnRectangleIcon,
  ChevronLeftIcon,
  HomeIcon,
  BookmarkIcon,
  UserIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

const Sidebar = ({ isSidebarOpen, onCloseSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const { categories, loading } = useCategories();
  const [searchParams] = useSearchParams();

  const currentCategory = searchParams.get("category") || "all";
  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category.slug === "all") {
      params.delete("category");
    } else {
      params.set("category", category.slug);
    }

    navigate(`/home?${params.toString()}`);

    onCloseSidebar();
  };
  return (
    // sidebar started
    <div
      className={`bg-inv-bg text-primary  shadow absolute transition-all duration-300 ease-in-out top-0  w-64 h-full z-[60] ${isSidebarOpen ? "left-[0]" : "left-[-270px]"}`}
    >
      {/* Your sidebar content */}
      <div className="flex flex-col h-full justify-between">
        <div className="">
          <div className="flex items-center my-3">
            <ChevronLeftIcon
              className="text-inv-text h-6 md:h-12 cursor-pointer"
              onClick={onCloseSidebar}
            />
            <span className="text-inv-text font-normal">Back to Home</span>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                navigate("/home");
                onCloseSidebar();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-inv-text hover:bg-gray-700 transition"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </button>

            <button
              onClick={() => {
                navigate("/saved-news");
                onCloseSidebar();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-inv-text hover:bg-gray-700 transition"
            >
              <BookmarkIcon className="h-5 w-5" />
              Saved News
            </button>

            <button
              onClick={() => {
                navigate("/history");
                onCloseSidebar();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-inv-text hover:bg-gray-700"
            >
              <ClockIcon className="w-5 h-5" />
              Reading History
            </button>

            <button
              onClick={() => {
                navigate("/profile");
                onCloseSidebar();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-inv-text hover:bg-gray-700 transition"
            >
              <UserIcon className="h-5 w-5" />
              Profile
            </button>
          </div>

          <div className="border border-gray-600 mx-4 my-4"></div>

          <h2 className="text-xl font-semibold text-inv-text px-4">
            Categories
          </h2>
          <div className="border border-muted font-thin  mx-4"></div>
          {/* news categories */}
          <ul className="mt-2">
            {categories.map((category) => (
              <li
                key={category.slug}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer px-4 py-3 text-inv-text transition

                ${
                  currentCategory === category.slug
                    ? "bg-gray-600"
                    : "hover:bg-gray-700"
                }
            `}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        {/* for logout button */}
        <div
          className="flex px-4 py-3 cursor-pointer"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <ArrowRightStartOnRectangleIcon className="text-inv-text h-6 cursor-pointer" />
          <span className="ps-3 text-inv-text">Logout</span>
        </div>
      </div>
    </div>
    // sidebar end
  );
};

export default Sidebar;
