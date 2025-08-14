import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AlertList.css";
import { useAlertContext } from "../context/useAlertContext";
import { baseURL } from "../util/baseUrl";
const AlertList = () => {
    const [alertList, setAlertList] = useState([]);
    const { setReadAlert } = useAlertContext();
    const token = localStorage.getItem("token");
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
    };
    useEffect(() => {
        if (!token)
            return;
        axios
            .get(`${baseURL}/api/alert/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        })
            .then((res) => {
            const sortedAlerts = res.data.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
            setAlertList(sortedAlerts);
            return axios.put(`${baseURL}/api/alert/read`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });
        })
            .then(() => {
            setAlertList((prev) => prev.map((alert) => ({ ...alert, read: true })));
            setReadAlert(true);
        })
            .catch((e) => {
            console.error(e);
        });
    }, [token]);
    return (_jsx("div", { className: "AlertList", children: alertList.length === 0 ? (_jsx("div", { children: "\uC54C\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" })) : (_jsx("ul", { children: alertList.map((alert, index) => (_jsxs("li", { className: `alert_total_list ${alert.read ? "" : "active"}`, children: [_jsxs("div", { className: "alert_main", children: [_jsx("h3", { children: alert.title }), _jsx("p", { children: alert.content })] }), _jsx("div", { className: "alert_date", children: _jsx("p", { children: formatDate(alert.dateTime) }) })] }, index))) })) }));
};
export default AlertList;
