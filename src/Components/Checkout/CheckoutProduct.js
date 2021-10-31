import React from 'react'
import { useStateValue } from '../../StateProvider'
import './CheckoutProduct.css'

export default function CheckoutProduct({ id, title, rating, price, image }) {

    const [{ }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        console.log("Called")
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="product" />

            <div className="checkoutProduct__info">
                <div className="checkoutProduct__title">
                    {title}
                </div>
                <p className="checkoutProduct__price">
                    <small> $ </small>
                    <strong>{price}</strong>
                    <div className="checkoutProduct___rating">
                        {
                            Array(rating)
                                .fill()
                                .map((_) => <p>⭐</p>)
                        }
                    </div>
                </p>
                <button onClick={() => removeFromBasket()}>Remove from Basket</button>
            </div>
        </div>
    )
}
