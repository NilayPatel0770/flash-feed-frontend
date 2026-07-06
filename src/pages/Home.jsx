import React from "react";
import UseNewsData from "../hooks/UseNewsData";
import Card from "../component/UI/Card";
import usePersonalizedNews from "../hooks/usePersonalizedNews";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const { news: recommendedNews, loading: recommendationLoading } =
    usePersonalizedNews();
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const { allNews, isLoading, error } = UseNewsData("all_news",search);
    if (isLoading) {
        return <p className="text-center mt-10">Loading news...</p>;
  }
  if (error) {
    return <p className="text-center mt-10">Error loading news</p>;
  }

  return (
    <div className="px-4">
      {/* Recommended */}

      {!search && recommendedNews.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-main-text mb-6">
            Recommended For You
          </h2>

          {recommendedNews.map((news) => (
            <Card key={news._id} news={news} />
          ))}
        </div>
      )}
      {allNews.map((news) => (
        <Card key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
