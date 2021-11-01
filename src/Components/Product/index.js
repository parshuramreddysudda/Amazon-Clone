import { Button } from '@mui/material';
import React from 'react'
import { toast } from 'react-toastify';
import { useStateValue } from '../../StateProvider'
import './Product.css'
import 'react-toastify/dist/ReactToastify.css';

function Index({ id, title, rating, price, image }) {
    const [{ user }, dispatch] = useStateValue();

    const addToBasket = () => {

        if (user) {
            notify("Item added to Cart");
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id,
                    title,
                    image,
                    price,
                    rating
                },
            });
        }
        else {
            toast.warning("Please Login to Continue", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'colored',
                draggable: true,
                pauseOnHover: false,
                progress: undefined,
            });
        }
    };
    const notify = (message) =>
        toast.success(message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'colored',
            draggable: true,
            pauseOnHover: false,
            progress: undefined,
        });
    return (
        <>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$ </small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {
                            Array(rating)
                                .fill()
                                .map((_) => <p>⭐</p>)
                        }
                    </div>
                </div>

                <img src={image} />
                <Button onClick={() => addToBasket()}>Add to basket</Button>
            </div>
        </>
    )
}

export default Index;
