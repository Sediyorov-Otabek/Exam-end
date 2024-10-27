import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";
import CreatePost from "../pages/Create-Post/CreatePost";
import Detail from "../pages/detail/Detail";

const Home: LazyExoticComponent<any> = lazy(() => import("../pages/home/Home"));
const SingUp: LazyExoticComponent<any> = lazy(
  () => import("../pages/auth/sinp-up/Sing-up")
);
const Layout: LazyExoticComponent<any> = lazy(
  () => import("../pages/layout/Layout")
);
const AllUser: LazyExoticComponent<any> = lazy(
  () => import("../pages/all-user/AllUser")
);
const NotFound: LazyExoticComponent<any> = lazy(
  () => import("../pages/not-Found/NotFound")
);
const Login: LazyExoticComponent<any> = lazy(
  () => import("../pages/auth/login/Login")
);
const Auth: LazyExoticComponent<any> = lazy(() => import("../pages/auth/Auth"));
const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "CreatePost",
          element: (
            <Suspense>
              <CreatePost />
            </Suspense>
          ),
        },
        {
          path: "alluser",
          element: (
            <Suspense>
              <AllUser />
            </Suspense>
          ),
        },
        {
          path: "/detel/:username",
          element: (
            <Suspense>
              <Detail />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      ),
    },
    {
      path: "/auth",
      element: (
        <Suspense>
          <Auth />
        </Suspense>
      ),
      children: [
        {
          path: "login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "singUp",
          element: (
            <Suspense>
              <SingUp />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default Routers;
