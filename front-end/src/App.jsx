import { useEffect, useState } from "react";

const App = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return <div className="text-3xl underline">{msg}</div>;
};

export default App;
