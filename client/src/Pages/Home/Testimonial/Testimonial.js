import React from "react";
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestimonialData from "./TestimonialData";
const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            author:"Winson Herry",
            location: "California",
            authorImg:people1
        },
        {
            _id:2,
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            author:"Winson Herry",
            location: "California",
            authorImg:people2
        },
        {
            _id:3,
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            author:"Winson Herry",
            location: "California",
            authorImg:people3
        }
    ]
  return (
    <section>
      <div className="flex justify-between">
      <div>
      <h4 className="text-primary text-md font-bold">Testimonial</h4>
        <h2 className="text-black text-2xl">What Our Patience Says</h2>
      </div>
        <img className="w-20 lg:w-32" src={quote} alt="" />
        </div>
      <div className="grid lg:grid-cols-3 gap-5">
{reviews.map(item => <TestimonialData item={item}/>)}
      </div>
    </section>
  );
};

export default Testimonial;
