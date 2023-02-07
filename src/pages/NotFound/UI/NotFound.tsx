import React from 'react';
import cls from './NotFound.module.scss'

export default function NotFound() {

    return (
        <div className={cls.NotFound}>
            <h1 className={cls.title}>Страница не найдена</h1>
            <button className={cls.btn}>На главную</button>
        </div>
    );
};