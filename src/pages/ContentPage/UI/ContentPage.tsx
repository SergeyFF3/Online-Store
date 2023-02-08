import React from 'react';
import {HeaderCatalog} from 'widgets/Header';
import {Sidebar} from 'widgets/Sidebar';
import cls from './ContentPage.module.scss'
import {Product, ProductCard} from "entities/ProductCard";
import {useSelector} from "react-redux";
import {getShoppingCartData} from "../../CartPage";

const products = require('shared/json/products.json') as Product[]

const ContentPage = () => {

    const cartData = useSelector(getShoppingCartData)

    const buyProduct = React.useCallback( (value: Product, id: number) => {
        cartData?.push(value)
    }, [cartData])

    return (
        <>
            <HeaderCatalog/>
            <div className={cls.content}>
                <Sidebar/>
                <div className={cls.wrapper}>
                    <h2 className={cls.title}>Catalog</h2>
                    <div className={cls.listCard}>
                        {products?.map((product) => {
                            return <ProductCard
                                key={product.id}
                                product={product}
                                // buyProduct={buyProduct(product)}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(ContentPage);