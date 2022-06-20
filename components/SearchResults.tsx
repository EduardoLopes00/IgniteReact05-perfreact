
import { useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";
import { Results } from "../pages";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Results
    onAddToWishList: (id: number) => void
}

export function SearchResults({results, onAddToWishList}: SearchResultsProps) {
    const rowRenderer: ListRowRenderer = ({index, key, style}) => {
        return (
            <div key={key} style={style} >
                <ProductItem      
                    product={results.data[index]}
                    onAddToWishList={onAddToWishList}
                />
            </div>
        );
    }

    return (
        <div>
            <h2>Total: {results.totalPrice}</h2>

            <List 
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.data.length}
                rowRenderer={rowRenderer}
            />
        </div>
    );
} 