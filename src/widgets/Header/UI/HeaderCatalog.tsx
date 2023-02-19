import React from 'react';
import {useNavigate} from 'react-router-dom';
import cls from './Header.module.scss'
import Cart from 'shared/assets/cart-svg.svg'
import {useSelector} from "react-redux";
import {getShoppingCartData} from "pages/CartPage";

const HeaderCatalog = () => {

    const navigate = useNavigate()

    const cartData = useSelector(getShoppingCartData)

    const navigateCard = React.useCallback( () => {
        navigate('/cart')
    }, [navigate])

    return (
        <header className={cls.header}>
           <div>LOGO</div>
            <div onClick={navigateCard} className={cls.cart}>
                <p className={cls.abs}>{cartData?.length}</p>
                <img
                    alt="cart"
                    src={Cart}
                />
            </div>
        </header>
    );
};

export default React.memo(HeaderCatalog);