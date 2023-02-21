import React from 'react';
import {Product} from '../model/types';
import cls from './ProductCard.module.scss'

interface ProductCardProps {
    product: Product
    addProductInCart?: (obj: Product) => void
}

const ProductCard = (props: ProductCardProps) => {
    const {product, addProductInCart} = props

    return (
        <div className={cls.ProductCard}>
            <div className={cls.image}></div>
            <p>{product.title}</p>
            <h6>Brand {product.brand}</h6>
            <div className={cls.bottomRow}>
                <h6>{product?.regular_price?.value} {product?.regular_price?.currency}</h6>
                <button className={cls.btn} onClick={addProductInCart && (() => addProductInCart(product))}>Buy</button>
            </div>
        </div>
    );
};

export default React.memo(ProductCard);