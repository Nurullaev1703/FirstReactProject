import React, { useState } from 'react';
import { TProduct } from '../models';
import axios from 'axios';

const productData:TProduct = {
    id: 10,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
}


type TCreateProductProps = {
    onCreate: (product:TProduct) => void
}

export function CreateProduct({onCreate}:TCreateProductProps){

    const [value,setValue] = useState('');
    const [error,setError]  = useState('')
    // теперь при нажатии на кнопку, страница не перезагружается
    const submitHandler = async (event:React.FormEvent) => {
        setError('');
        event.preventDefault();
        // проверяем значение поля
        if(value.trim().length === 0){
            setError('Please enter a value');
            return;
        }
        // меняем название товара
        productData.title = value;
        // отправляем запрос на создание товара
        const response = await axios.post('https://fakestoreapi.com/products', productData);
        onCreate(response.data)
    };
    // по идее здесь должен быть KeyboardEvent, но использовал ChangeEvent
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return(
        <form onSubmit={submitHandler}>
            <input
                type='text'
                className='border p-2 mb-2 w-full outline-0'
                placeholder='Input product title'
                value = {value}
                onChange={changeHandler}
            />
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <button type="submit" className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
        </form>
    )
}