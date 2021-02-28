//export const API_URL = "https://fsf26ystsj.execute-api.us-east-1.amazonaws.com/dev/api";

export let API_URL = "http://localhost:3000/api";

if (process.env.BABEL_ENV && process.env.BABEL_ENV.prod) {
  API_URL = "https://fsf26ystsj.execute-api.us-east-1.amazonaws.com/dev/api";
}

export default API_URL;
