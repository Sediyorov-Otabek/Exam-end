import { useEffect } from "react";
import "./App.css";
import Routers from "./router";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "./redux/slice/AuthSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fromRegister = localStorage.getItem("formRegister") === "true";

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "token") {
        dispatch(logOut());
        navigate("/auth/login");
      }
    };

    // window.addEventListener("storage", handleStorageChange);

    const token = localStorage.getItem("token");
    const path = window.location.pathname;

    if (path === "/auth/login") {
      if (token) {
      }
    } else if (path === "/auth/singUp") {
      localStorage.setItem("formRegister", "true");
    } else {
      setTimeout(() => {
        if (!token) {
          navigate("/auth/login");
        }
      }, 1000);
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      localStorage.removeItem("formRegister");
    };
  }, [navigate, dispatch, fromRegister]);
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
