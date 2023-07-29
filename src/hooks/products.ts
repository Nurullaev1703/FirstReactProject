import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { TProduct } from "../models"

export function useProducts() {
    // Состояние для размещения товаров
  const [products,setProducts] = useState<TProduct[]>([])
  // Состояние для загрузки данных
  const [isLoading,setIsLoading] = useState(true)
  // Состояние для вывода ошибки
  const [isError,setIsError] = useState('')

  const addProduct = (product:TProduct) => {
    setProducts(prev => [...prev,product])
  }

  // асинхронные функции работают вне контекста сайта и вернет результат только по окончанию действий в ней
  async function fetchProducts() {
    // await - JS ждет окончание запроса
    // TProduct[] - тип данных, которые мы получаем с сервера
    // axios - метод для получения данных из сервера
    try {
      // убираем ошибку
      setIsError('')

      setIsLoading(true)
      const response = await axios.get<TProduct[]>('https://fakestoreapi.com/products?limit=20')
      setProducts(response.data)
      setIsLoading(false)
    } catch (e:unknown) {
      const error = e as AxiosError
      setIsLoading(false)
      setIsError(error.message)
    }
    
  };

  // вызывается только один раз, когда react объект готов
  useEffect(() => {
    fetchProducts();
  }, [])

  return {
    products,
    isLoading,
    isError,
    addProduct
  }
}