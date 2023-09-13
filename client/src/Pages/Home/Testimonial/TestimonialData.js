import React from "react";

const TestimonialData = ({item}) => {
    const {description,authorImg,author,location} = item
  return (
    <div className="bg-gray-50  shadow-xl p-5">
      <div className="text-black text-md">
        <p>{description}</p>
      </div>
      <div className="flex mt-5 items-center text-black">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img className="" src={authorImg} alt=''/>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-lg">{author}</h3>
          <h5 className="text-sm">{location}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialData;
