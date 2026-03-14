import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
const ManageLike = () => {
  return (
    <div className="flex flex-col items-center me-2">
      <HeartIcon className="block h-4 w-4 mb-1 text-base" />
      <p className="text-xs text-base">
        <span>20</span>
      </p>
    </div>
  );
};

export default ManageLike;