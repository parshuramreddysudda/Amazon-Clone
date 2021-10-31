import React from 'react'
import './Home.css'
import Product from '../Product'
import banner from '../../Images/banner.jpg'
function index() {

    const addDefaultSrc = ev => {
        ev.target.src = banner;
    }
    return (
        <div className="home">
            <img
                onError={addDefaultSrc}
                className="home__image"
                alt="banner "
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
            <div className="home_row">
                <Product
                    id={3244}
                    title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) "
                    price={'36,990.00'}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"}
                />
                 <Product
                    id={234}
                    title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Green (4th Generation) "
                    price={'46,900.00'}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/71SAHzzQqkL._SX679_.jpg"}
                />
            </div>
            <div className="home_row">
                <Product
                    id={3244}
                    title="New Apple AirPods (3rd Generation)"
                    price={'45,787.56'}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/61Z5J-fq7KL._SL1500_.jpg"}
                />
                 <Product
                    id={3244}
                    title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage) "
                    price={'24,900.00'}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/51UK9Xj6uzS._SL1500_.jpg"}
                />
                 <Product
                    id={3244}
                    title="OnePlus 9 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage with Rear Quad Camera "
                    price={'60,999.00'}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/61LvUvbZGlL._SL1500_.jpg"}
                />
            </div>
            <div className="home_row">
                 <Product
                    id={3244}
                    title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray"
                    price={'86,290'}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"}
                />
            </div>


        </div>
    )
}

export default index
