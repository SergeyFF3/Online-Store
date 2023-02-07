import React from 'react';
import {HeaderCatalog} from 'widgets/Header';
import {Sidebar} from 'widgets/Sidebar';
import cls from './ContentPage.module.scss'
import {Product, ProductCard} from "entities/ProductCard";

const products = require('shared/json/products.json') as Product[]

const ContentPage = () => {

    return (
        <>
            <HeaderCatalog/>
            <div className={cls.content}>
                <Sidebar/>
                <div className={cls.wrapper}>
                    <h2 className={cls.title}>Catalog</h2>
                    <div className={cls.listCard}>
                        {products?.map((product) => {
                            return <ProductCard key={product.id} product={product}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(ContentPage);