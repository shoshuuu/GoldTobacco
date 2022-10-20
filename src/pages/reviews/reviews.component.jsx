import url from "../../../package.json";
import { useState, useEffect } from "react";
import axios from "axios";
import JWTConfig from "../../helpers/jwt";

import "./reviews.styles.scss";

export function Reviews() {
  const [reviews, setReviews] = useState({ reviews: [{}], isLoaded: false });
  const [token, setToken] = useState({ token: "", isLoaded: false });
  useEffect(() => {
    axios(JWTConfig())
      .then((response) => {
        setToken({ token: response.data.token, isLoaded: true });
      })
      .catch((error) => console.log(error.response.data))
      .finally(() => {});
  }, []);

  useEffect(() => {
    if (token.isLoaded) {
      const requestOptions = {
        method: "get",
        url: url.proxy + "/wp-json/site-reviews/v1/reviews",
        headers: {
          "Content-Type": "applications/json",
          Authorization: `Bearer ` + token.token,
        },
        redirect: "manual",
      };
      axios(requestOptions)
        .then((result) => {
          setReviews({ reviews: result.data, isLoaded: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  /**
   * @param {Event} event
   **/
  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    var data = {
      content: event.target.content.value,
      name: event.target.name.value,
      rating: 5,
      status: "publish",
      title: event.target.name.value,
      type: "Местный отзыв",
    };

    var config = {
      method: "get",
      url: url.proxy + "/wp-json/site-reviews/v1/reviews",
      headers: {
        "Content-Type": "applications/json",
        Authorization: `Bearer ` + token.token,
      },
      redirect: "manual",
      body: data,
    };

    console.log(config);
    axios(config)
      .then(function (response) {
        debugger;
        console.log(JSON.parse(config.body));
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (reviews.isLoaded && reviews.reviews) {
    return (
      <div className="Reviews">
        <h2 className="Reviews__title">
          Оставьте отзыв о вашей покупке здесь!
        </h2>
        <form onSubmit={() => handleSubmit}>
          <label htmlFor="name" className="Reviews__label">
            Имя
          </label>
          <div className="Reviews__input">
            <input
              type="text"
              className="Reviews__input__text"
              name="name"
              placeholder="Ваше имя..."
            />
          </div>
          <label htmlFor="content" className="Reviews__label">
            Ваш отзыв
          </label>
          <div className="Reviews__input">
            <textarea
              id="content"
              name="conent"
              className="Reviews__textarea"
              placeholder="Ваш отзыв..."
            ></textarea>
          </div>
          <div className="Reviews__submit__container">
            <input
              type="submit"
              value="Оставить отзыв"
              className="Reviews__submit"
            />
          </div>
        </form>

        <div className="Reviews__container">
          {reviews.reviews.map((review) => {
            return (
              <div className="Reviews__review" key={review.id}>
                <p className="Reviews__review__date">
                  {review.date.slice(0, 10)}
                </p>
                <h2 className="Reviews__review__name">{review.name}</h2>
                <p className="Reviews__review__content">{review.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else
    return (
      <div className="Reviews">
        <h2 className="Reviews__title">
          Оставьте отзыв о вашей покупке здесь!
        </h2>
        <form onSubmit={() => handleSubmit}>
          <label htmlFor="name" className="Reviews__label">
            Имя
          </label>
          <div className="Reviews__input">
            <input
              type="text"
              className="Reviews__input__text"
              name="name"
              placeholder="Ваше имя..."
            />
          </div>
          <label htmlFor="content" className="Reviews__label">
            Ваш отзыв
          </label>
          <div className="Reviews__input">
            <textarea
              name="conent"
              className="Reviews__textarea"
              placeholder="Ваш отзыв..."
            ></textarea>
          </div>
          <div className="Reviews__submit__container">
            <input
              type="submit"
              value="Оставить отзыв"
              className="Reviews__submit"
            />
          </div>
        </form>
        <h2 style={{ margin: "2vw auto" }}>Отзывы загружаются...</h2>
      </div>
    );
}

export default Reviews;

// const myHeaders = new Headers();
