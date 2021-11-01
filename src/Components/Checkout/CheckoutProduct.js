import { Button } from '@mui/material';
import React from 'react'
import { useStateValue } from '../../StateProvider'
import './CheckoutProduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CheckoutProduct({ id, title, rating, price, image }) {

    const [{ }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        notify()
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    const notify = () =>
        toast.error(" Item Deleted from Cart", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'colored',
            draggable: true,
            pauseOnHover:false,
            progress: undefined,
        });
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
            <ToastContainer />
            <div className="checkoutProduct">
                <img src={image} alt="product" />

                <div className="checkoutProduct__info">
                    <div className="checkoutProduct__title">
                        {title}
                    </div>
                    <div className="checkoutProduct__price">
                        <small> $ </small>
                        <strong>{price}</strong>
                        <div className="checkoutProduct___rating">
                            {
                                Array(rating)
                                    .fill()
                                    .map((index, _) => <p id={_}>⭐</p>)
                            }
                        </div>
                    </div>

                    <Button onClick={() => removeFromBasket()}>Remove from Basket</Button>
                </div>
            </div>
        </>
    )
}
