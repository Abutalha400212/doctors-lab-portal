import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState();

  useEffect(() => {
    if (email) {
      fetch(`https://doctors-lab-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
            localStorage.setItem("accessToken", data.success);
            setToken(data.success);
          }
        });
    }
  }, [email]);
  return [token];
};
export default useToken;
