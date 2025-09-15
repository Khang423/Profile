import { useEffect, useState } from "react";
import axios from "axios";
const TestApi = () => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/test")
      .then((res) => {
        setMsg(res.data.message);
      })
      .catch((err) => {
        console.log("Api error: ", err);
      });
  }, []);
  return <div className="text-3xl underline">{msg}</div>;
};

export default TestApi;
