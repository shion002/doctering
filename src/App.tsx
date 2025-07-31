import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import { CategoryProvider } from "./context/CategoryProvider";
import Callback from "./auth/Callback";
import Bookmark from "./page/Bookmark";
import { useEffect } from "react";
import axios from "axios";
import Alert from "./page/Alert";
import LoginSelectProvider from "./context/LoginSelectProvider";
import Info from "./page/Info";
import { AlertProvider } from "./context/AlertProvider";
import { baseURL } from "./util/baseUrl";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios
      .get(`http://${baseURL}/api/oauth/validate`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        console.log("세션 유지 로그인");
      })
      .catch((e) => {
        if (token && e.response?.status === 401) {
          localStorage.removeItem("token");
          console.log("세션 만료 로그아웃됨");
        }
      });
  }, []);

  return (
    <div className="App">
      <AlertProvider>
        <CategoryProvider>
          <LoginSelectProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/alert" element={<Alert />} />
              <Route path="/info" element={<Info />} />
              <Route path="/oauth/callback" element={<Callback />} />
            </Routes>
          </LoginSelectProvider>
        </CategoryProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
