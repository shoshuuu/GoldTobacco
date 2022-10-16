import url from "../../package.json";
import axios from "axios";

export default function JWTConfig() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = JSON.stringify({
    username: "Anastasia",
    password: "SVo7$jfg0X@zs%dUwK",
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
