import { ReactNode, useEffect, useState } from "react";
import { LoginSelectContext } from "./LoginSelectContext";
import LoginSelect from "../components/LoginSelect";

const LoginSelectProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const open = () => setShow(true);
  const close = () => {
    setShow(false);
    localStorage.removeItem("postLoginAction");
  };

  return (
    <LoginSelectContext.Provider value={{ show, open, close }}>
      {children}

      {show && (
        <>
          <div className="login_overlay" onClick={close} />
          <LoginSelect />
        </>
      )}
    </LoginSelectContext.Provider>
  );
};

export default LoginSelectProvider;
