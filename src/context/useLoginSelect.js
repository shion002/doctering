import { useContext } from "react";
import { LoginSelectContext } from "./LoginSelectContext";
const useLoginSelect = () => {
    const context = useContext(LoginSelectContext);
    if (!context)
        throw new Error("useLoginSelect must be used with Provider");
    return context;
};
export default useLoginSelect;
