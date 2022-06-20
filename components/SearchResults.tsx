
import { Product, ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Product[]
}

export function SearchResults({results}: SearchResultsProps) {
    return (
        <div>
            {results.map(product => {
                return (
                    <ProductItem product={product}/>
                );
            })}
        </div>
    );
} 