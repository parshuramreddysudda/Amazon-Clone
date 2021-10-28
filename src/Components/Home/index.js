import React from 'react'
import './Home.css'
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
            
        </div>
    )
}

export default index
