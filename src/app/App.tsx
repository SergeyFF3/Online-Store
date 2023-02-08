import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import {ContentPage} from "pages/ContentPage";
import { CartPage } from 'pages/CartPage';
import { NotFound } from 'pages/NotFound';

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<ContentPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}
