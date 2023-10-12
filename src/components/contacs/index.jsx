import Heading from "../heading";
import "./index.css";

export default function Contact({ contact }) {
  // name: "Kerthy",
  // image: "https://picsum.photos/80/80",
  // response_rate: 100,
  // response_time: "within an hour",
  // info: "I'm an Austin-Brooklyn filmmaker and television producer who can be found biking to the Farmer's Market...",
  // phone: "+123-456-7890",
  return (
    <div className="contact">
      <div className="contact__member">
        <img className="contact__photo" src={contact.image} alt="" />
        <div className="contact__about">
          <Heading>Господар - {contact.name}</Heading>
          <div className="contact__member__sub">
            <span className="contact__member__sub-value">{contact.phone}</span>
            <span className="contact__member__sub-value">
              {contact.response_time}
            </span>
            <span className="contact__member__sub-value">
              {contact.response_rate}%
            </span>
          </div>
        </div>
      </div>
      <p className="contact__info">{contact.info}</p>
    </div>
  );
}
