import axios from "axios";


// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },  
});

// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;

instance.interceptors.request.use(
  (config) => {
    if (!localStorage.session) {
      return config;
    }
    config.headers["Authorization"] = `Bearer ${
      JSON.parse(localStorage.session).token
    }`;

    if (config.url === "/certificate/student/pdf") {
      config.responseType = "blob";
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function fetching({ path, method, data: payload}) {
  console.log("fetching", path, method, payload);
  try {
    const config = {
      method,
      url: path,
      data: payload,
    };

    const response = await instance(config);

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

export function post({ path, data }) {
  return fetching({ path, method: "POST", data });
}

export function put({ path, data }) {
  return fetching({ path, method: "PUT", data });
}

export function del({ path }) {
  return fetching({ path, method: "DELETE" });
}

export function patch({ path, data }) {
  return fetching({ path, method: "PATCH", data });
}

export function downloadBlob({ path, data }) {
  return fetching({ path,  data });
}
