import { useState, useEffect } from "react";
import { getAllNewsData } from "../services/NewsDataService";

const useNewsData = (category, search) => {
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const getNewsData = async () => {
    setIsLoading(true);

    try {
     const apiCategory =
    category === "all" ? "" : category;

      const res = await getAllNewsData(apiCategory, search);

      setAllNews(res.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  getNewsData();
}, [category, search]);

  // Returning an object is better for scaling than returning just the array
  return { allNews, isLoading, error };
};

export default useNewsData;
