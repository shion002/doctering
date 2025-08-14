import { jsx as _jsx } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import { AlertContext } from "./AlertContext";
import { baseURL } from "../util/baseUrl";
export const AlertProvider = ({ children }) => {
    const [readAlert, setReadAlert] = useState(true);
    const token = localStorage.getItem("token");
    const fetchUnreadStatus = () => {
        if (!token) {
            setReadAlert(true);
            return;
        }
        axios
            .get(`${baseURL}/api/alert/unread`, {
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
    return (_jsx(AlertContext.Provider, { value: { readAlert, setReadAlert, fetchUnreadStatus }, children: children }));
};
