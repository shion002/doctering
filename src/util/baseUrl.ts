const isLocalNetwork =
  window.location.hostname.startsWith("192.168.") ||
  window.location.hostname === "localhost";

export const baseURL = isLocalNetwork
  ? import.meta.env.VITE_DEV_URL
  : import.meta.env.VITE_PRODUCTION_URL;
