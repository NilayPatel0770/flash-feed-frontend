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
    const category =
    searchParams.get("category") || "all";
    const { allNews, isLoading, error } = UseNewsData(category,search);
    if (isLoading) {
        return <p className="text-center mt-10">Loading news...</p>;
  }
  if (error) {
    return <p className="text-center mt-10">Error loading news</p>;
  }

  return (
    <div className="px-4">

  {!search && category === "all" && recommendedNews.length > 0 && (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-main-text mb-6">
        Recommended For You
      </h2>

      {recommendedNews.map((news) => (
    <div key={news._id}>
        <h2 className="text-red-500 font-bold">Recommended</h2>
        <Card news={news} />
    </div>
))}
    </div>
  )}

  <div className="mb-8">
    <h2 className="text-3xl font-bold text-main-text mb-6">
      {search
        ? `Search Results for "${search}"`
        : category === "all"
        ? "Latest News"
        : `${category.charAt(0).toUpperCase() + category.slice(1)} News`}
    </h2>

    {allNews.map((news) => (
    <div key={news._id}>
        <h2 className="text-green-500 font-bold">All News</h2>
        <Card news={news} />
    </div>
))}
  </div>

</div>
  );
};

export default Home;
