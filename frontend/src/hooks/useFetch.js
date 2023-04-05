import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (url) => {
  // console.log("urllllllllllllll=> ", url);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        console.log("res", res.data);
        setData(res.data);
      } catch (err) {
        // console.log("errrrrrr", err);
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, error, loading, reFetch };
};
export default useFetch;
