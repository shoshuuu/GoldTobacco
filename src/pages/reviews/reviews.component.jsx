import url from "../../../package.json";
import { useState, useEffect } from "react";
import axios from "axios";
import JWTConfig from "../../helpers/jwt";

import "./reviews.styles.scss";

export function Reviews() {
  const [reviews, setReviews] = useState({ reviews: [], isLoaded: false });
  const [token, setToken] = useState({ token: "", isLoaded: false });
  const [successfulSubmit, setSuccessfulSubmit] = useState([]);

  const getKey = () => {
    axios(JWTConfig())
      .then((response) => {
        setToken({ token: response.data.token, isLoaded: true });
      })
      .catch((error) => console.log(error.response.data))
      .finally(() => {});
  };
  const getReviews = () => {
    if (token.isLoaded) {
      const requestOptions = {
        method: "get",
        url: url.proxy + "/wp-json/site-reviews/v1/reviews ",
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
        })
        .finally(() => {});
    }
  };

  useEffect(() => {
    getKey();
  }, []);
  useEffect(() => {
    getReviews();
  }, [token]);

  /**
   * @param {Event} event
   **/
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      content: event.target.content.value,
      name: event.target.name.value,
      rating: 5,
      status: "publish",
      title: event.target.name.value,
      type: "Местный отзыв",
      is_approved: false,
    };

    const config = {
      method: "post",
      url: url.proxy + "/wp-json/site-reviews/v1/reviews",
      headers: {
        Authorization: "Bearer" + token.token,
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios(config)
      .then(function (response) {
        console.log("success");
      })
      .then(function (response) {
        setSuccessfulSubmit(
          <div className="success">
            <p>
              Ваш отзыв принят! Через какое-то время он появится на сайте :)
            </p>
          </div>
        );
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch(function (error) {
        return false;
      });
  }

  let data =
    reviews.isLoaded && reviews.reviews ? (
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
    ) : (
      <h2 style={{ margin: "2vw auto" }}>Отзывы загружаются...</h2>
    );
  return (
    <div className="Reviews">
      {successfulSubmit}
      <h2 className="Reviews__title">Оставьте отзыв о вашей покупке здесь!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="Reviews__label">
          Имя
        </label>
        <div className="Reviews__input">
          <input
            type="text"
            className="Reviews__input__text"
            name="name"
            placeholder="Ваше имя..."
            required
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
            required
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

      {data}
    </div>
  );
}

export default Reviews;
