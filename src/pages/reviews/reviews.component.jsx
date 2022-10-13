import WPAPI from "wpapi";
import url from "../../../package.json";

import React, { Component } from "react";
import JWT from "../../helpers/jwt";
//import refreshToken from "../../helpers/jwt";

export class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    const token = new JWT();
    console.log(JWT.refreshToken());
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbmFzdGFzZWkuYmVnZXQudGVjaCIsImlhdCI6MTY2NTQyNzIzOCwibmJmIjoxNjY1NDI3MjM4LCJleHAiOjE2NjYwMzIwMzgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.EH-QvDw83brT2WlHD4Vg6qiG2NvTLE1r1y4HpsNJ7jY"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "manual",
    };

    fetch(url.proxy + "/wp-json/site-reviews/v1/reviews", requestOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        return jsonData;
      })
      .then((result) => this.setState({ reviews: result, isLoaded: true }))
      .catch((error) => console.log("error", error));
  }

  /**
   * @param {Event} event
   */
  handleSubmit = (event) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbmFzdGFzZWkuYmVnZXQudGVjaCIsImlhdCI6MTY2NTQyNzIzOCwibmJmIjoxNjY1NDI3MjM4LCJleHAiOjE2NjYwMzIwMzgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.EH-QvDw83brT2WlHD4Vg6qiG2NvTLE1r1y4HpsNJ7jY"
    );
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      content: event.target.content.value,
      custom: [],
      is_approved: false,
      is_modified: true,
      is_pinned: false,
      is_verified: false,
      meta: [],
      name: event.target.name.value,
      rating: 5,
      response: null,
      status: "publish",
      terms: true,
      title: `Отзыв от ${event.target.name.value}`,
      type: "Местный отзыв",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "manual",
    };

    fetch(url.proxy + "/wp-json/site-reviews/v1/reviews", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result));
  };
  render() {
    return (
      <div className="Reviews">
        <h2>Оставьте отзыв о вашей покупке здесь!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Имя</label>
          <br></br>
          <input type="text" name="name" />
          <br></br>
          <label htmlFor="content">Ваш отзыв</label>
          <br></br>
          <textarea name="conent"></textarea>
          <br></br>
          <input type="submit" value="Оставить отзыв" />
        </form>
        {this.state.reviews.map((review) => {
          return (
            <div className="Reviews__review" key={review.id}>
              <div className="Reviews__review__credentials">
                <p className="Reviews__review__date">
                  {review.date.slice(0, 10)}
                </p>
                <p className="Reviews__review__name">{review.name}</p>
              </div>

              <div>
                <div className="quote"></div>
                <p className="Reviews__review__content">{review.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Reviews;
