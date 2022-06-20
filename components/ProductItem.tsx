import { memo, useState } from "react"
import dynamic from "next/dynamic"
import { AddProductToWishListProps } from "./AddProductToWishList"


export type Product = {
    id: number,
    title: string,
    price: number,
    priceFormatted: string
}

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
   return import ('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
    loading: () => <span>Loading...</span>
})

interface ProductItemProps {
    product: Product
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({product, onAddToWishList}: ProductItemProps) {
    const [isAddingToWishList, setIsAddingToWishList] = useState(false)

    return (<div>
        {product.title} - <strong>{product.priceFormatted}</strong>
<<<<<<< HEAD
        
        
        <button onClick={() => {setIsAddingToWishList(true)}}>Add to wish list</button>
        {isAddingToWishList && <AddProductToWishList 
            onAddToWishList={() => onAddToWishList(product.id)}
            onRequestClose={() => {setIsAddingToWishList(false)}}
            />}
=======
        <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
>>>>>>> c1b19cafe1ff0294e9344590c5d7b81b97f0dc19
    </div>)
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})