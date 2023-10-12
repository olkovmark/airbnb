import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

import batchRoomImg from "./batchRoomImg.svg";
import bedImg from "./bedImg.svg";
import BedRoomsImg from "./BedRoomsImg.svg";
import questImg from "./questImg.svg";

export default function PropertyDescription({ list }) {
  return (
    <Box shadow className="property">
      <Heading border>Деталі властивості:</Heading>
      <ul className="property__list">
        <ListItem imgSrc={questImg}>{list.guests} гості</ListItem>
        <ListItem imgSrc={BedRoomsImg}>{list.bedrooms} спальня</ListItem>
        <ListItem imgSrc={bedImg}>{list.beds} ліжко</ListItem>
        <ListItem imgSrc={batchRoomImg}>{list.baths} ванні кімнати</ListItem>
      </ul>
    </Box>
  );
}
