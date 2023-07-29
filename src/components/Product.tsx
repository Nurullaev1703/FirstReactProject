import React, { useState } from "react"
import {TProduct} from '../models'

type TProductProps = {
    product: TProduct
}



export function Product({product}:TProductProps){
    // состояние позволяет отображать информацию о товаре в реальном времени
    // details - информация о товаре
    // setDetails - функция для отображения информации о товаре
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <p className="font-bold">{product.price}$</p>
            {/* подставляем классы как строку */}
            <button className={btnClasses.join(' ')} 
            onClick={() => setDetails(prev => !prev)}>
                {/* проверка деталей для текста кнопки */}
                {details? "Hide details" : "Show details"}
            </button>

            {/* поверяем детали */}
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight:900}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}