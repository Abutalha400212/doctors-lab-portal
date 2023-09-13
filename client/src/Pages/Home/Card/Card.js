import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";
import CardData from "./CardData";
const Card = () => {
  const cardItem = [
    {
      img: clock,
      title: "Opening Hours",
      id: 1,
      bgColor: "bg-primary",
      description: "Lorem Ipsum is simply dummy text of the pri",
    },
    {
      img: location,
      title: "Visit our location",
      id: 2,
      bgColor: "bg-accent",
      description: "Brooklyn, NY 10036, United States",
    },
    {
      img: Phone,
      title: "Contact us now",
      id: 3,
      bgColor: "bg-primary",
      description: "+000 123 456789",
    },
  ];
  return <div className="grid lg:grid-cols-3 gap-5 my-32 mx-5 text-white">
    {cardItem.map(item => <CardData key={item.id} item={item}/>)}
  </div>;
};

export default Card;
