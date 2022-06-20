import { memo } from "react"

export type Product = {
    id: number,
    price: number,
    title: string
}

interface ProductItemProps {
    product: Product
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({product, onAddToWishList}: ProductItemProps) {
    
    return (<div>
        {product.title} - <strong>{product.price}</strong>
        <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
    </div>)
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})