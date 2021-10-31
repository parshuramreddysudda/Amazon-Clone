import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Checkout.css'
import add from '../../Images/add.jpg'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Index() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className='checkout__ad'
                    src={add}
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div >
                        <h2 className="checkout__title">Your Basket is empty. Try  to add some items</h2>
                    </div>
                ) : (
                    <div >
                        <h2 className="checkout__title">Your shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )
                }
            </div>

            {basket?.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}

        </div>
    )
}


export default Index
