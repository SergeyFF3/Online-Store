import React from 'react';
import cls from './Sidebar.module.scss'
import {Brand} from "../model/types";

const brands = require('shared/json/brands.json') as Brand[]

const Sidebar = () => {

    return (
        <div className={cls.Sidebar}>
            <button className={cls.brand}>All Brands</button>
            {brands.map((brand) => {
                return <button
                    key={brand.id}
                    className={cls.brand}
                >
                    {brand.title}
                </button>
            })}
        </div>
    );
};

export default React.memo(Sidebar);