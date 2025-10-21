const isLocalNetwork =
  window.location.hostname.startsWith("192.168.") ||
  window.location.hostname === "localhost";

export const apiURL = isLocalNetwork
  ? "http://localhost:8888"
  : import.meta.env.VITE_API_URL;
