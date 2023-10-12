import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

const AdditionalList = {
  house_rules: {
    name: "Правила дому",
  },
  cancellation_policy: {
    name: "Політика скасування",
  },
  local_transportation: {
    name: "Місцевий транспорт",
  },
  host_languages: { name: "Мови хоста" },
  special_offers: { name: "Спеціальні пропозиції:" },
  "check-in_instructions": { name: "Інструкції щодо реєстрації" },
};

export default function Additional({ list }) {
  const listItems = Object.entries(list);

  return (
    <Box shadow className="property">
      <Heading border>Зручності</Heading>
      <ul className="property__list">
        {listItems.map(
          ([key, value]) =>
            value && (
              <ListItem key={key} title={AdditionalList[key].name}>
                {!Array.isArray(value) ? value : value.join(", ")}
              </ListItem>
            )
        )}
      </ul>
    </Box>
  );
}
