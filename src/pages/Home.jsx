import React from "react";
import UseNewsData from "../hooks/UseNewsData";
import Card from "../component/UI/Card";

const Home = () => {
  // fetch all news data
  const { allNews, isLoading, error } = UseNewsData("all_news");

  if (isLoading) {
    return <p className="text-center mt-10">Loading news...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">Error loading news</p>;
  }
  return (
    <div className="px-4">
      {allNews.map((res) => (
        //passing news data to card UI
        <Card news={res} key={res.hash_id} />
      ))}
    </div>
  );
};

export default Home;
