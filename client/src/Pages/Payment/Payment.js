import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);
const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="">
      <h1 className="text-black font-semibold mb-2">{data.treatment}</h1>
      <hr/>
      <p className="text-black mt-2">
        Please Pay <span className="font-bold">${data.price}</span> for your appointment on <span className="text-green-800 font-bold">{data.appointmentDate}</span>{" "}
        at <span className="text-blue-700 font-bold">{data.slot}</span>
      </p>
      <div className="w-96 my-6 ">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
