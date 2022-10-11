import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // el url esta hardcodeado como esta en mi local, lo puedes cambiar si quieres
      try {
        const { data: response } = await axios.get(
          "http://localhost:8080/api/productos"
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading
  };
};

export default UseFetchData;
