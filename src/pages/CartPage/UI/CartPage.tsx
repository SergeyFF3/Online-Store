import React from 'react';
import {useNavigate} from 'react-router-dom';
import cls from './CartPage.module.scss'
import {ShoppingCartItem} from "entities/ShoppingCartItem";
import {useSelector} from "react-redux";
import {
    getShoppingCartData,
    getShoppingCartDisabled,
    getShoppingCartTotalPrice
} from "../model/selectors/getShoppingCartData";
import {Product} from "entities/ProductCard";
import {useAppDispatch} from "../../../app/StoreProvider/store";
import {cartActions} from '../model/slices/cartSlice';

const CartPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const cartData = useSelector(getShoppingCartData)
    const disabled = useSelector(getShoppingCartDisabled)
    const totalPrice = useSelector(getShoppingCartTotalPrice)

    const plusProduct = React.useCallback((obj: Product) => {
        dispatch(cartActions.addProductInCart(obj))
    }, [dispatch])

    const minusProduct = React.useCallback((obj: Product) => {
        dispatch(cartActions.minusProduct(obj))
    }, [dispatch])

    const deleteProduct = React.useCallback((obj: Product) => {
        dispatch(cartActions.deleteProduct(obj))
    }, [dispatch])

    const clearCart = React.useCallback(() => {
        dispatch(cartActions.clearCart())
    }, [dispatch])

    const onBackPage = React.useCallback(() => {
        navigate(-1)
    }, [navigate])

    return (
        <>
            <header className={cls.header}>LOGO</header>
            <div className={cls.shopWrapper}>
                <h1>Shopping cart</h1>
                <div>
                    <button className={cls.btn} onClick={onBackPage}>Back</button>
                    <button className={cls.btn} onClick={clearCart}>Clear cart</button>
                </div>
            </div>
            <ul className={cls.table}>
                <li className={cls.column}>Item</li>
                <li className={cls.column}>Price</li>
                <li className={cls.column}>Qty</li>
                <li className={cls.column}>Total</li>
            </ul>
            {cartData?.length === 0
                ? <h1 className={cls.title}>The cart is empty</h1>
                : cartData?.map((product) => {
                    return (
                        <ShoppingCartItem
                            key={product.id}
                            product={product}
                            deleteProduct={deleteProduct}
                            plusProduct={plusProduct}
                            minusProduct={minusProduct}
                            disabled={disabled}
                        />
                    )
                })}
            <div className={cls.bottomRow}>
                <h1 className={cls.subtotal}>Subtotal: {totalPrice.toFixed(2)}</h1>
                <button className={cls.btn}>Checkout</button>
            </div>
        </>
    );
};

export default React.memo(CartPage);