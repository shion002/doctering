import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { AlertContext } from "./AlertContext";
import { apiURL } from "../util/baseUrl";

interface Props {
  children: ReactNode;
}

export const AlertProvider = ({ children }: Props) => {
  const [readAlert, setReadAlert] = useState(true);
  const token = localStorage.getItem("token");

  const fetchUnreadStatus = () => {
    if (!token) {
      setReadAlert(true);
      return;
    }

    axios
      .get(`${apiURL}/api/alert/unread`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((res) => {
        setReadAlert(res.data);
        console.log(res.data);
      })
      .catch(() => setReadAlert(true));
  };

  useEffect(() => {
    fetchUnreadStatus();
  }, [token]);

  return (
    <AlertContext.Provider
      value={{ readAlert, setReadAlert, fetchUnreadStatus }}
    >
      {children}
    </AlertContext.Provider>
  );
};
