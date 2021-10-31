import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Checkout.css'
import add from '../../Images/add.jpg'
import CheckoutProduct from './CheckoutProduct'


function Index() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img
                className='checkout__ad'
                src={add}
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket is empty. Try  to add some items</h2>
                </div>
            ) : (
                <div>
                    <h2>Ypur shopping Basket</h2>
                    {basket.map(item=>(
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
    )
}


export default Index
