import { useState } from "react";
import {
  BookmarkIcon as OutlineBookmark,
} from "@heroicons/react/24/outline";

import {
  BookmarkIcon as SolidBookmark,
} from "@heroicons/react/24/solid";

import { toast } from "react-toastify";

import {
  bookmarkArticle,
  removeBookmark,
} from "../../services/userInteractionService";

const BookmarkButton = ({
  articleId,
  initialBookmarked = false,
}) => {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [loading, setLoading] = useState(false);

  const handleBookmark = async (e) => {
    e.stopPropagation();

    if (loading) return;

    setLoading(true);

    try {
      if (bookmarked) {
        await removeBookmark(articleId);

        setBookmarked(false);

        toast.success("Bookmark removed");
      } else {
        await bookmarkArticle(articleId);

        setBookmarked(true);

        toast.success("Article bookmarked");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Unable to update bookmark"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBookmark}
      className="hover:text-blue-500 transition"
    >
      {bookmarked ? (
        <SolidBookmark className="w-6 h-6 text-blue-600" />
      ) : (
        <OutlineBookmark className="w-6 h-6" />
      )}
    </button>
  );
};

export default BookmarkButton;