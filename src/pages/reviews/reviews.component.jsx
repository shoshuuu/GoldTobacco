import url from "../../../package.json";

import { useState, useEffect } from "react";
import axios from "axios";

import "./reviews.styles.scss";
//import refreshToken from "../../helpers/jwt";

export function Reviews() {
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    // const token = new JWT();
    // console.log(JWT.refreshToken());
    // const myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbmFzdGFzZWkuYmVnZXQudGVjaCIsImlhdCI6MTY2NTQyNzIzOCwibmJmIjoxNjY1NDI3MjM4LCJleHAiOjE2NjYwMzIwMzgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.EH-QvDw83brT2WlHD4Vg6qiG2NvTLE1r1y4HpsNJ7jY"
    // );

    // const requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "manual",
    // };

    // fetch(url.proxy + "/wp-json/site-reviews/v1/reviews", requestOptions)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (jsonData) {
    //     return jsonData;
    //   })
    //   .then((result) => this.setState({ reviews: result, isLoaded: true }))
    //   .catch((error) => console.log("error", error));
    axios
      .get("https://catfact.ninja/fact")
      .then(function (response) {
        setReviews(response.data);
        setLoaded(true);
        console.log(response.data);
        console.log(reviews);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);
  if (isLoaded) {
    return (
      <div className="Reviews">
        <h2 className="Reviews__title">
          Оставьте отзыв о вашей покупке здесь!
        </h2>
        <form>
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
        {/* {Object.entries(reviews).map((review) => {
          debugger;
          console.log(review); */}
        <h1 key={reviews.length}> {reviews.fact}</h1>
        <div className="Reviews__review" /*key={review.id}*/>
          <div className="Reviews__review__credentials">
            <p className="Reviews__review__date">
              2000.11.22
              {/*review.date.slice(0, 10)*/}
            </p>
            <p className="Reviews__review__name">{/*review.name*/}Лизочка</p>
          </div>

          <div>
            <div className="quote"></div>
            <p className="Reviews__review__content">
              {/*review.content*/}Хуйня ваш магазин
            </p>
          </div>
        </div>

        <div className="Reviews__review" /*key={review.id}*/>
          <div className="Reviews__review__credentials">
            <p className="Reviews__review__date">
              2000.11.22
              {/*review.date.slice(0, 10)*/}
            </p>
            <p className="Reviews__review__name">{/*review.name*/}Лизочка</p>
          </div>

          <div>
            <div className="quote"></div>
            <p className="Reviews__review__content">
              {/*review.content*/}Lorem ipsum asjfhkahjfkhjaskdhasdhkashdkahskdh
              sdhakh sdaha sjh hasdjhdsjh hdaskh h j ha
            </p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="Reviews">
        <h2>Оставьте отзыв о вашей покупке здесь!</h2>
        <form>
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

        <h2>Отзывы загружаются</h2>
      </div>
    );
}

export default Reviews;

// const myHeaders = new Headers();
// myHeaders.append(
//   "Authorization",
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbmFzdGFzZWkuYmVnZXQudGVjaCIsImlhdCI6MTY2NTQyNzIzOCwibmJmIjoxNjY1NDI3MjM4LCJleHAiOjE2NjYwMzIwMzgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.EH-QvDw83brT2WlHD4Vg6qiG2NvTLE1r1y4HpsNJ7jY"
// );
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   content: event.target.content.value,
//   custom: [],
//   is_approved: false,
//   is_modified: true,
//   is_pinned: false,
//   is_verified: false,
//   meta: [],
//   name: event.target.name.value,
//   rating: 5,
//   response: null,
//   status: "publish",
//   terms: true,
//   title: `Отзыв от ${event.target.name.value}`,
//   type: "Местный отзыв",
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "manual",
// };

// fetch(url.proxy + "/wp-json/site-reviews/v1/reviews", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result));
