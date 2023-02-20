import React, {useCallback} from 'react';
import cls from './Sidebar.module.scss'
import {Brand} from "../model/types";
import {contentActions} from "../../../pages/ContentPage/model/slices/contentSlice";
import {useAppDispatch} from "../../../app/StoreProvider/store";

interface SidebarProps {
    filterCatalog?: (value?: number) => void
}

const brands = require('shared/json/brands.json') as Brand[]

const Sidebar = (props: SidebarProps) => {
    const dispatch = useAppDispatch()

    const sortProducts = useCallback((value: Brand) => {
        dispatch(contentActions.sortProducts(value))
    }, [dispatch])

    return (
        <div className={cls.Sidebar}>
            <button className={cls.brand}>All Brands</button>
            {brands.map((brand) => {
                return <button
                    key={brand.id}
                    className={cls.brand}
                    onClick={() => sortProducts(brand)}
                >
                    {brand.title}
                </button>
            })}
        </div>
    );
};

export default React.memo(Sidebar);