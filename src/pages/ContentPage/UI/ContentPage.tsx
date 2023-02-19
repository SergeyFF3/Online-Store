import React from 'react';
import {HeaderCatalog} from 'widgets/Header';
import {Sidebar} from 'widgets/Sidebar';
import cls from './ContentPage.module.scss'
import {Product, ProductCard} from "entities/ProductCard";
import {useSelector} from "react-redux";
import {getShoppingCartData} from "pages/CartPage";
import {useAppDispatch} from "app/StoreProvider/store";
import {cartActions} from 'pages/CartPage/model/slices/cartSlice';
import {getContentData} from "../model/selectors/getContentData";

const ContentPage = () => {
    const dispatch = useAppDispatch()

    const cartData = useSelector(getShoppingCartData)

    const products = useSelector(getContentData)



    // const filterCatalog = React.useCallback((value?: number) => {
    //     console.log(value)
    //    return  productsForm.filter(value1 => value1.id === value)
    //
    // }, [])

    const addProductInCart = React.useCallback((value: Product) => {
        dispatch(cartActions.addProductInCart(value))
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
                                addProductInCart={() => addProductInCart(product)}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(ContentPage);