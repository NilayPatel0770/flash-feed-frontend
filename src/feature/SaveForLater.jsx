import { BookmarkIcon } from "@heroicons/react/24/outline";
import React from "react";
const SaveForLater = () => {
  return (
    <div className="flex  items-center justify-center  w-10 h-10 rounded-full bg-white shadow-lg ">
      <BookmarkIcon className="block h-4 w-4 text-black" />
    </div>
  );
};

export default SaveForLater;