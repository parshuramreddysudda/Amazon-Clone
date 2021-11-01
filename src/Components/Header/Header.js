import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../StateProvider';
import { auth } from '../Login/firebase';

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user)
            auth.signOut()
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="header" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header___link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello <br />{user ? String(user).substring(0, String(user).lastIndexOf('@')) : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/" className="header___link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return </span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header___link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your </span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header___link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
