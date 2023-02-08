import React from 'react';
import {useNavigate} from 'react-router-dom';
import cls from './Header.module.scss'
import Cart from 'shared/assets/cart-svg.svg'

const HeaderCatalog = () => {

    const navigate = useNavigate()

    const navigateCard = React.useCallback( () => {
        navigate('/cart')
    }, [navigate])

    return (
        <header className={cls.header}>
           <div>LOGO</div>
            <div className={cls.cart}>
                <p className={cls.abs}></p>
                <img
                    alt="cart"
                    src={Cart}
                    onClick={navigateCard}
                />
            </div>
        </header>
    );
};

export default React.memo(HeaderCatalog);