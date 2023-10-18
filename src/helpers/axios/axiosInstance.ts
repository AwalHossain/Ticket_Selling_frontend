
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Set withCredentials to true to send cookies with the request
        config.withCredentials = true;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    // @ts-ignore
    // If the response has a data field, assume it's a success response
    function (response) {
        if (response.data) {
            return {
                data: response.data,
            };
        } else {
            // If there is no data field, assume it's an error response
            return {
                error: {
                    statusCode: response.status,
                    message: "Invalid response format",
                },
            };
        }
    },
    function (error) {
        if (error.response && error.response.data) {
            // Handle specific error cases
            const responseObject = {
                error: {
                    statusCode: error.response.data.statusCode || 500,
                    message: error.response.data.message || "Something went wrong",
                    errorMessages: error.response.data.message,
                },
            };
            return responseObject;
        } else {
            // Handle other errors
            return {
                error: {
                    statusCode: 500,
                    message: "Something went wrong",
                },
            };
        }
    }
);

export default instance;

