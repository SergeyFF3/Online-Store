import React from 'react';
import {useNavigate} from 'react-router-dom';
import cls from './CartPage.module.scss'
import {ShoppingCartItem} from "entities/ShoppingCartItem";
import {useSelector} from "react-redux";
import {
    getShoppingCartData,
    getShoppingCartError,
    getShoppingCartIsLoading
} from "../model/selectors/getShoppingCartData";

const CartPage = () => {

    const navigate = useNavigate()

    const cartData = useSelector(getShoppingCartData)
    const isLoading = useSelector(getShoppingCartIsLoading)
    const error = useSelector(getShoppingCartError)

    const onBackPage = React.useCallback(() => {
        navigate(-1)
    }, [navigate])

    if (isLoading) {
        return (
            <>
                <header className={cls.header}>LOGO</header>
                <h1 className={cls.loading}>Loading...</h1>
            </>
        )
    }

    return (
        <>
            <header className={cls.header}>LOGO</header>
            <div className={cls.shopWrapper}>
                <h1>Shopping cart</h1>
                <button className={cls.btn} onClick={onBackPage}>Back</button>
            </div>
            <ul className={cls.table}>
                <li className={cls.column}>Item</li>
                <li className={cls.column}>Price</li>
                <li className={cls.column}>Qty</li>
                <li className={cls.column}>Total</li>
            </ul>
            {cartData?.length && cartData?.map((product) => {
                return (
                    <ShoppingCartItem
                        key={product.id}
                        product={product}
                    />
                )
            })}
            <div className={cls.bottomRow}>
                <h1 className={cls.subtotal}>Subtotal: </h1>
                <button className={cls.btn}>Checkout</button>
            </div>
        </>
    );
};

export default React.memo(CartPage);