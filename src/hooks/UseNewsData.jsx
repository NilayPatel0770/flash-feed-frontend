import { useState, useEffect } from "react";
import { getAllNewsData } from "../services/NewsDataService";

const useNewsData = (category) => {
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the function inside useEffect to avoid stale closures
    const getNewsData = async () => {
      setIsLoading(true);

      try {
        const apiCategory = category === "all_news" ? "" : category;

        const res = await getAllNewsData(apiCategory);
        console.log("Selected Category:", category);
        console.log("Called", res);
        setAllNews(res.data.data);
      } catch (err) {
        console.log("error", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getNewsData();
  }, [category]); // Re-run whenever the category changes

  // Returning an object is better for scaling than returning just the array
  return { allNews, isLoading, error };
};

export default useNewsData;
