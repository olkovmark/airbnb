import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box";

export default function Reviews({ list }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => {
          return (
            <Fragment key={id}>
              <Item {...rest}></Item>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__top">
        <span className="review__member">{guestName}</span>
        <span className="review__rate">Рейтинг: {rating}</span>
      </div>
      <span className="review__text">{review}</span>
    </Box>
  );
}
