import React from "react";
import ManageLike from "../../feature/ManageLike";
import SaveForLater from "../../feature/SaveForLater";

const Card = ({ news }) => {
  const date = new Date(news.news_obj.created_at);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "long",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return (
   <div className="mx-auto max-w-7xl rounded-xl shadow-lg flex flex-col md:flex-row m-6 overflow-hidden bg-card transition-colors duration-300">
      {/*Display News Image */}
      <div className="h-52 lg:h-72 md:h-80 bg-cover w-full md:w-1/3">
        {/* <img className="h-full w-full" src={data.urlToImage}></img> */}
        <img
          className="w-full h-full object-cover  overflow-hidden"
          src={news.news_obj.image_url}
          alt="No image found"
        />
      </div>

      {/* Start: News Content */}
      <div className="w-full md:w-2/3 p-6 relative md:static">
        <div className="flex justify-between">
          {/* Display news title */}
          <p className="font-bold text-sm md:text-xl mb-2 text-primary">
            {news.news_obj.title}
          </p>
          {/* Save news for later */}
          <SaveForLater />
        </div>
        {/* Display news auhtor name and generation time */}
        <div className="flex mb-4 w-full">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Author profile"
            className="w-10 h-10 rounded-full me-4 hidden md:block"
          />
          <div>
            <p className="font-bold text-sm md:text-base text-primary">
              Short by: {news.news_obj.author_name}
            </p>
            <p className="text-xs md:text-sm text-primary">{formattedDate}</p>
          </div>
        </div>
        {/* Display aggrigated news */}
       <p className="text-muted text-justify mb-2 text-xs md:text-sm lg:text-base">
          {news.news_obj.content}
        </p>
        {/* Link of source */}
        <p className="text-xs text-primary">
           <span>read more at</span>
              <a href={news.source_url} target="_blank">
                <span className="text-blue-700 ms-1">{news.news_obj.source_name}</span>
              </a>
            </p>
      </div>
      {/* End: News Content */}
    </div>
  );
};

export default Card;
