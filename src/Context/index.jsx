import { createContext, useState } from "react";


const CartContext=createContext()


const CartProvider =({children})=>{

    // Cart - Increment quantity
    const [count,setCount]=useState(0)

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen]=useState(false)

    //Product Detail - Show product
    const [productToShow,setProductToShow]=useState({})
    
    return(
        <CartContext.Provider value={{
            count,
            setCount,
            setIsProductDetailOpen,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export{CartContext,CartProvider}