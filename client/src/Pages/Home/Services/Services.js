import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceData from "./ServiceData";
const Services = () => {
  const serviceItem = [
    {
      img: fluoride,
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: cavity,
      id: 2,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: whitening,
      id: 3,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="my-32 mx-5">
      <div className="text-center">
        <h3 className="text-primary font-bold text-xl"> Our Services</h3>
        <h4 className="text-3xl font-semibold text-black">
          Services We Provide
        </h4>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 text-black my-5 ">
        {serviceItem.map((item) => (
          <ServiceData key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
