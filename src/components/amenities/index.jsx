import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

import baby_img from "./baby.svg";
import breakfast_img from "./breakfast.svg";
import pool_img from "./pool.svg";
import pets_img from "./pets.svg";
import serviceRoom_img from "./service-room.svg";
import service_img from "./service.svg";
import transfer_img from "./transfer.svg";
import wifi_img from "./wifi.svg";
import car_img from "./car.svg";
import gym_img from "./gym.svg";

const AmenitiesList = {
  hasPool: { name: "Басейн", img: pool_img },
  hasGym: { name: "Спортивний зал", img: gym_img },
  hasFreeBreakfast: { name: "Безкоштовний сніданок", img: breakfast_img },
  hasFreeWiFi: { name: "Безкоштовний Wi-Fi", img: wifi_img },
  hasParking: { name: "Безкоштовний вуличний паркінг", img: car_img },
  hasPetsAllowed: {
    name: "Дозволено розміщення з домашніми тваринами",
    img: pets_img,
  },
  hasAirportShuttle: { name: "Трансфер до/з аеропорту", img: transfer_img },
  hasConciergeService: { name: "Консьєрж-сервіс", img: service_img },
  hasRoomService: { name: "Обслуговування номерів", img: serviceRoom_img },
  hasChildFriendly: { name: "Підходить для дітей", img: baby_img },
};

export default function Amenities({ list }) {
  const listItems = Object.entries(list);

  return (
    <Box shadow className="property">
      <Heading border>Зручності</Heading>
      <ul className="property__list">
        {listItems.map(
          ([key, value]) =>
            value && (
              <ListItem key={key} imgSrc={AmenitiesList[key].img}>
                {AmenitiesList[key].name}
              </ListItem>
            )
        )}
      </ul>
    </Box>
  );
}
