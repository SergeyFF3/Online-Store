import React from 'react';
import {HeaderCatalog} from 'widgets/Header';
import {Sidebar} from 'widgets/Sidebar';
import cls from './ContentPage.module.scss'
import {Product, ProductCard} from "entities/ProductCard";
import {useSelector} from "react-redux";
import {useAppDispatch} from "app/StoreProvider/store";
import {cartActions} from 'pages/CartPage/model/slices/cartSlice';
import {getContentData} from "../model/selectors/getContentData";

const ContentPage = () => {
    const dispatch = useAppDispatch()

    const products = useSelector(getContentData)

    const addProductInCart = React.useCallback((obj: Product) => {
        dispatch(cartActions.addProductInCart(obj))
    }, [dispatch])

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
                                addProductInCart={addProductInCart}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(ContentPage);