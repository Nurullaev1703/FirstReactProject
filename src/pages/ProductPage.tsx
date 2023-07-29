import React, { useContext } from 'react'
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { TProduct } from '../models';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { CreateProduct } from '../components/CreateProduct';
import { Modal } from '../components/Modal';

export const ProductPage = () => {
    // забираем нужные поля из функции useProducts
    const {isLoading, isError, products,addProduct} = useProducts();
    const {modal,close,open} = useContext(ModalContext);

    const createHandler = (product:TProduct) => {
    close()
    addProduct(product);
    }

    return (
    <div className='container mx-auto max-w-2xl pt-5'>
        {isError && <ErrorMessage isError={isError}/>}
        {/* при медленной загрузке отображаем текст */}
        {isLoading && <Loader/>}
    {/* размещение продуктов через цикл */}
        {products.map((product) => <Product product={product} key={product.id}/>)}

        {modal &&
        <Modal title="Create new product" onClose={() => close()}>
            <CreateProduct onCreate = {createHandler}/>
        </Modal>
        }
        <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
        onClick={() => open()}
        >+</button>
    </div>
    
    )

}