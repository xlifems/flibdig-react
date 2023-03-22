import axios from "axios";

async function fetching({ path, method, payload = {} }) {
  const source = axios.CancelToken.source();

  try {
    const config = {
      method,
      url: path,
      data: payload,
      headers: { "Content-Type": "application/json" },
    };
    
    const response = await axios(config);

    if (response.statusText !== "OK") {
      throw new Error("Error fetching data");
    }

    return response;
  } catch (error) {
    return error;
  }
}

export function get({ path }) {
  return fetching({ path, method: "GET" });
}

export function post({ path, data, start }) {
  return fetching({ path, method: "POST", start, data });
}
