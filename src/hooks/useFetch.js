import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useFetch({ path, method, payload = {}, start }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setLoading("loading...");
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();

    try {
      const config = {
        method,
        url: path,
        data: payload,
        headers: { "Content-Type": "application/json" },
      };

      //const response = await axios.get(path, { cancelToken: source.token });
      const response = await axios(config);

      if (response.statusText !== "OK") {
        throw new Error("Error fetching data");
      }

      response.data.content && setData(response.data.content);
      response.content && setData(response.content);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

    return () => {
      source.cancel();
    };
  }, [path]);

  useEffect(() => {
    if (start) getData();
  }, [getData]);

  return { data, loading, error };
}

export function useGet({ path, start }) {
  return useFetch({ path, method: "GET", start });
}

export function usePost({ path, data, start }) {
  const fetchResult = useFetch({ path, method: "POST", start, data });
  return fetchResult;
}
