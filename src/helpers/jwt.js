import url from "../../package.json";

export default function JWTConfig() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = JSON.stringify({
    username: process.env.REACT_APP_INIT_HOST_USERNAME,
    password: process.env.REACT_APP_INIT_HOST_PASSWORD,
  });

  const config = {
    method: "post",
    url: url.proxy + "/wp-json/jwt-auth/v1/token",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return config;
}
