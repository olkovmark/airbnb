import Box from "../box";
import Header from "../header";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

export default function Attractions({ list }) {
  return (
    <Box className="attractions">
      <Heading border>Пам'ятки поблизу</Heading>
      <ul className="attractions__list">
        {list.map((item) => {
          return (
            <ListItem key={item.key}>
              <a className="attractions__link" href={item.link}>
                {item.name}
              </a>
            </ListItem>
          );
        })}
      </ul>
    </Box>
  );
}
