import React from 'react';
import cls from './ShoppingCartItem.module.scss'
import Delete from 'shared/assets/delete.svg'
import {Product} from "entities/ProductCard";

interface ShoppingCartItemProps {
    product: Product
    disabled: boolean
    deleteProduct?: (obj: Product) => void
    minusProduct?: (obj: Product) => void
    plusProduct?: (obj: Product) => void
}

const ShoppingCartItem = (props: ShoppingCartItemProps) => {

const {
    product,
    disabled,
    deleteProduct,
    minusProduct,
    plusProduct
} = props

    return (
        <div className={cls.ShoppingCartItem}>
            <div className={cls.column}>
                <div className={cls.logo}></div>
                <p>{product?.title}</p>
            </div>
            <div className={cls.column}>{product?.regular_price?.value}</div>
            <div className={cls.column}>
               <button
                   className={cls.span}
                   disabled={product.disabled}
                   onClick={() => minusProduct(product)}>
                   -
               </button>
               <span>{product.count}</span>
               <button
                   className={cls.span}
                   onClick={() => plusProduct(product)}>
                   +
               </button>
            </div>
            <div className={cls.column}>
                {(product.regular_price.value * product.count).toFixed(2)}
                <img className={cls.delete} alt="#" src={Delete}
                     onClick={deleteProduct && (() => deleteProduct(product))}/>
            </div>
        </div>
    );
};

export default React.memo(ShoppingCartItem);