import React from 'react'
import { createContext, useState } from 'react'
import { productsArray, getProductData } from './productStore'

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneToCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function cartProvider({children}) {
    const [cartProducut, setCartProduct] = useState([]);

    function getProductQuantity (id) {
        const quantity = cartProducut.find(product =>
             product.id === id)?.quantity

        if(quantity === undefined) {
            return 0;
        }
        
        return quantity;

    }

    function addOneToCart(id) {
         const quantity = getProductQuantity(id);
         if(quantity === 0) {
            setCartProduct(
                [
                    ...cartProducut,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
         }else {
            setCartProduct(
                cartProducut.map(product => product.id === id ? {
                    ...product, quantity: product.quantity + 1
                }: product )
            )
         }
    }

    function removeOneToCart(id) {
        const quantity = getProductQuantity(id)
        if(quantity == 1 ){
            deleteFromCart(id);
        }else {
            setCartProduct(
                cartProducut.map(product => product.id === id ? {
                    ...product, quantity: product.quantity -1
                }: product)
            )
        }
    }

    function deleteFromCart (id) {
        setCartProduct(
            cartProducut=>cartProducut.filter(currentProduct => {
                return currentProduct.id != id
            })
        )
    }

    function getTotalCost () {
        let totalCost = 0
        cartProducut.map((cartItem) => {
            const producData = getProductData(cartItem.id);
            totalCost += producData.Price * cartItem.quantity
        })
        return totalCost
    }

    const contextValue = {
        items: cartProducut,
        getProductQuantity,
        addOneToCart,
        removeOneToCart,
        deleteFromCart,
        getTotalCost,
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default cartProvider;