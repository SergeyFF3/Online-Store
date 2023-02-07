import React from 'react';
import cls from './Sidebar.module.scss'
import {Brand} from "../model/types";

const brands = require('shared/json/brands.json') as Brand[]

const Sidebar = () => {

    return (
        <div className={cls.Sidebar}>
            <p>All Brands</p>
            {brands.map((brand) => {
                return <p
                    key={brand.id}
                    className={cls.brand}
                >
                    {brand.title}
                </p>
            })}
        </div>
    );
};

export default React.memo(Sidebar);