import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const { _id, patient, patientName } = appointment;
    // console.log(patient, patientName)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(appointment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret);
                }
            });
    }, [appointment, clientSecret]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if (intentError) {
            setProcessing(false);
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent?.id);
            setSuccess('Congrats Your payment is completed');
            const payment = {
                appointment: _id,
                transactionId: paymentIntent?.id
            }

            const id = _id;
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
            .then((res) => res.json())
            .then((data) => {
                setProcessing(false)
                console.log(data)
            });
        };
    };



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-success my-5' type="submit" disabled={success || !stripe || !clientSecret}>
                Pay
            </button>
            {cardError && <p className=' text-red-500'>{cardError}</p>}
            {success && <div className=' text-green-500'>
                <p>{success}</p>
                <p>Your transaction id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
            </div>}
        </form>
    );
}

export default CheckoutForm;