import { Outlet } from "react-router";
import Footer from "./components/footer";
import Navbar from "./components/navBar";

// eslint-disable-next-line
export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
