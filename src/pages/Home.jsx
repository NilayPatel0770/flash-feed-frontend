import React from "react";
import UseNewsData from "../hooks/UseNewsData";
import Card from "../component/UI/Card";

const Home = () => {
    const {
        allNews,
        isLoading,
        error
    } = UseNewsData("all_news");
    if (isLoading) {
        return (
            <p className="text-center mt-10">
                Loading news...
            </p>
        );
    }
    if (error) {
        return (
            <p className="text-center mt-10">
                Error loading news
            </p>
        );
    }

    return (
        <div className="px-4">
            {allNews.map((news) => (
                <Card
                    key={news._id}
                    news={news}
                />
            ))}
        </div>
    );
};

export default Home;