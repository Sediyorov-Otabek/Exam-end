import { Outlet } from "react-router-dom";
import Snper from "../../components/snper/Snper";

const Layout = () => {
  return (
    <>
      <Snper />
      <main className="pl-[270px] mr-[550px] min-w-full">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
