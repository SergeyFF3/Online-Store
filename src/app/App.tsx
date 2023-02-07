import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import {ContentPage} from "pages/ContentPage";
import { Cart } from 'entities/Cart';
import { NotFound } from 'pages/NotFound';

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<ContentPage/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}
