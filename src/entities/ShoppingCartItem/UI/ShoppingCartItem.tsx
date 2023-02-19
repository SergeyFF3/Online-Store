import React from 'react';
import cls from './ShoppingCartItem.module.scss'
import Delete from 'shared/assets/delete.svg'
import {Product} from "entities/ProductCard";

interface ShoppingCartItemProps {
    product: Product
}

const ShoppingCartItem = ({product}: ShoppingCartItemProps) => {

    return (
        <div className={cls.ShoppingCartItem}>
            <div className={cls.column}>
                <div className={cls.logo}></div>
                <p>{product?.title}</p>
            </div>
            <div className={cls.column}>{product?.regular_price?.value}</div>
            <div className={cls.column}></div>
            <div className={cls.column}>1
                <img alt="#" src={Delete} className={cls.delete}/>
            </div>
        </div>
    );
};

export default React.memo(ShoppingCartItem);