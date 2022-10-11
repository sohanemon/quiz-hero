import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
