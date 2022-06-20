
import { useMemo } from "react";
import { Results } from "../pages";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Results
    onAddToWishList: (id: number) => void
}

export function SearchResults({results, onAddToWishList}: SearchResultsProps) {
    return (
        <div>
            <h2>Total: {results.totalPrice}</h2>

            {results.data.map(product => {
                return (
                    <ProductItem 
                        key={product.id}    
                        product={product}
                        onAddToWishList={onAddToWishList}/>
                );
            })}
        </div>
    );
} 