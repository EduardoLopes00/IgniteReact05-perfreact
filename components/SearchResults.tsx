
import { useMemo } from "react";
import { Product, ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Product[]
}

export function SearchResults({results}: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price;
        }, 0)
    }, [results])
    
    return (
        <div>
            <h2>Total: {totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem 
                    key={product.id}    
                    product={product}/>
                );
            })}
        </div>
    );
} 