import axios from "axios";
import API from "../api/api";
// const baseUrl = "https://inshorts.com/api/en/news?category=";
// // to get all news
// export const getAllNewsData = async (category) => {
//   const newsData = `${baseUrl}${category}&max_limit=100&include_card_data=true`;
//   return await axios.get(`${newsData}`);
// };

// to get all news
export const getAllNewsData = async (category = "all") => {

    let url = "/api/news";

    if (category && category !== "all") {
        url += `?category=${encodeURIComponent(category)}`;
    }

    console.log("Request URL:", url);

    return API.get(url);
};




