import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const userType = window.localStorage.getItem("userType")

    if (!token || userType !== "ADMIN") {
      history.push("/user/login");
    }
  }, []);
};
