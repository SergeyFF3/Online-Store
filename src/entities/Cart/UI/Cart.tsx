import React from 'react';
import cls from './Cart.module.scss'

interface CartProps {
    className?: string
}

const Cart = (props: CartProps) => {

    const {
        className
    } = props

    return (
        <div >
           Cart
        </div>
    );
};

export default React.memo(Cart);