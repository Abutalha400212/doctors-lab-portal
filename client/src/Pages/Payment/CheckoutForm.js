import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({booking}) => {
    const {price,name,email,_id} = booking
    const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret , setClientSecret] = useState('')
  const [cardError, setCardError] = useState('');
  const [paymantStatus ,setPaymentStatus] = useState(false)
    useEffect(()=>{
        fetch("https://doctors-lab-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
            body: JSON.stringify({ price}),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
        }, [price]);


  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
        setCardError(error.message);
    } else {
      setCardError('')
    }
    setPaymentStatus(true)
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email:email
            },
          },
        },
      );
      if(confirmError){
        setCardError(confirmError.message);
        return
      }
if(paymentIntent.status === "succeeded"){
  
  fetch(`https://doctors-lab-server.vercel.app/updateStatus/${_id}`,{
    method:"PUT",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({status:"paid"})
  })
  .then(res=>res.json())
  .then(data =>{
    if(data){
        toast.success("Payment Succcessfully")
        navigate('/dashboard/dashboard/myappointment')
    }
  })

}
console.log(paymentIntent);

  };
  return (
    <>
    <form onSubmit={handlePayment}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {paymantStatus ? <p className="mt-5 text-black font-bold">Paid</p> :<button  className="btn btn-sm btn-primary mt-5 text-red-900" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>}
    </form>
    <p className="text-red-500">{cardError}</p>
    </>
  );
};

export default CheckoutForm;
