import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'df2b4c94demshdc7985be40a747fp1a4f7ejsn03425da1b9c6',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { 
      ...query
    },
  };

  const fetchData = async () => {
    setLoading(true);
   
    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setLoading(false);
    
    } catch (error) {
      setError(error);
      alert("There is an error")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Include endpoint and query in the dependency array

  const refetchData = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetchData };
};

export default useFetch;



