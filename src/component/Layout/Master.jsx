import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "../UI/Navbar";

const Master = () => {
  return (
    <div className="bg-base">
      <Header />
      <div className="container mx-auto">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Master;
