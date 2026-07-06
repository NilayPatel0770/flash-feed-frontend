import React from "react";
import {
  HeartIcon,
  BookmarkIcon,
  EyeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import SaveForLater from "../../feature/SaveForLater";
import ManageLike from "../../feature/ManageLike";
import { useNavigate } from "react-router-dom";
import LikeButton from "../Common/LikeButton";
import BookmarkButton from "../Common/BookmarkButton";

const Card = ({ news }) => {
  const date = new Date(news.publishedAt);
  const navigate = useNavigate();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  return (
    <div className="mx-auto max-w-7xl bg-card rounded-2xl shadow-lg overflow-hidden mb-8 transition-colors duration-300 cursor-pointer" onClick={() => navigate(`/article/${news._id}`)}>
      <div className="md:flex">
        {/* Image */}

        <div className="md:w-1/3">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Content */}

        <div className="md:w-2/3 p-6 flex flex-col">
          {/* Category */}

          <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold">
            {news.category}
          </span>

          {/* Title */}

          <h2 className="font-bold text-2xl text-main-text mt-2">
            {news.title}
          </h2>

          {/* Source */}

          <div className="flex items-center gap-2 mt-3 text-sm text-muted-text">
            <ClockIcon className="w-4 h-4" />

            <span>{formattedDate}</span>

            {/* <span>•</span> */}

            <span>{news.source}</span>
          </div>

          {/* AI Summary */}

          <div className="mt-6">
            <h3 className="font-semibold text-main-text mb-2">AI Summary</h3>

            <ul className="list-disc ml-5 space-y-2 text-muted-text">
              {news.summary?.length > 0 ? (
                news.summary.map((point, index) => <li key={index}>{point}</li>)
              ) : (
                <p className="text-muted-text">{news.description}</p>
              )}
            </ul>
          </div>

          {/* Footer */}

          <div className="flex justify-between items-center mt-auto pt-6">
            <div className="flex gap-5">
              <div className="flex items-center gap-5">

    <LikeButton
        articleId={news._id}
        initialCount={news.likes}
    />

    <BookmarkButton
        articleId={news._id}
    />

</div>
            </div>

            {/* <div className="flex gap-5 text-sm text-muted-text">
              <div className="flex items-center gap-1">
                <EyeIcon className="w-5 h-5" />

                {news.views}
              </div>

              <div className="flex items-center gap-1">
                <HeartIcon className="w-5 h-5" />

                {news.likes}
              </div>

              <div className="flex items-center gap-1">
                <BookmarkIcon className="w-5 h-5" />

                {news.bookmarks}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
