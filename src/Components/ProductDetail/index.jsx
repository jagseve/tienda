import {React, useContext} from 'react'
import {XMarkIcon} from '@heroicons/react/24/solid'
import { CartContext } from '../../Context'
import  './styles.css'

const ProductDetails = ()=>{

    const context=useContext(CartContext)
    console.log('PRODUCT TO SHOW: ', context.productToShow)

    return(
        <aside
        className= {`${ context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white top-20 gap-2`}>
            <div className='flex justify-between items-center p-6' >
                <h2 className='font-medium text-xl' >Product Detalis</h2>
                <div>
                    <XMarkIcon
                    onClick={() => ( context.setIsProductDetailOpen(false))}
                    className='cursor-pointer h-6 w-6 text-black rounded-ful bg-white/30'
                    />
                </div>

            </div>
            <figure>
                <img className='w-full h-full object-cover rounded-lg' src={context.productToShow.images} alt="" />
            </figure>
            <div> 

            </div>
        </aside>

    )
}

export {ProductDetails}



