import { json } from "react-router";
import url from "../../package.json";
import axios from "axios";

export default function JWT() {
  function refreshToken() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: process.env.REACT_APP_INIT_HOST_USERNAME,
      password: process.env.REACT_APP_INIT_HOST_PASSWORD,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url.proxy + "/wp-json/jwt-auth/v1/token", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((result) => this.setState({ token: result.token }));

    console.log(this.state.token);
  }
}
