import { useEffect, useState } from "react";
import API from "./api"; // Axios Instance

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/auth/current-user")
      .then(response => {
        setUser(response.data.user);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  return user;
};

export default useAuth;
