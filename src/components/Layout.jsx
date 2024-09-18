import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
