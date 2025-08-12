import axios from "axios";
import { useEffect, useState } from "react";
import "./AlertList.css";
import { useAlertContext } from "../context/useAlertContext";
import { baseURL } from "../util/baseUrl";

interface AlertListType {
  title: string;
  content: string;
  dateTime: string;
  read: boolean;
}

const AlertList = () => {
  const [alertList, setAlertList] = useState<AlertListType[]>([]);
  const { setReadAlert } = useAlertContext();
  const token = localStorage.getItem("token");

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
  };

  useEffect(() => {
    if (!token) return;

    axios
      .get(`${baseURL}/api/alert/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        const sortedAlerts = res.data.sort(
          (a: AlertListType, b: AlertListType) =>
            new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
        );
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

  return (
    <div className="AlertList">
      {alertList.length === 0 ? (
        <div>알림이 없습니다</div>
      ) : (
        <ul>
          {alertList.map((alert, index) => (
            <li
              key={index}
              className={`alert_total_list ${alert.read ? "" : "active"}`}
            >
              <div className="alert_main">
                <h3>{alert.title}</h3>
                <p>{alert.content}</p>
              </div>
              <div className="alert_date">
                <p>{formatDate(alert.dateTime)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertList;
