// React
import { useEffect, useState } from "react";
// Axios
import axios from "axios";

const useFetch = (link) => {
  const [data, setData] = useState();

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url, {
        withCredentials: true,
        "Content-type": "application/json",
      });
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(link);
  }, [link]);

  return data;
};
export default useFetch;
