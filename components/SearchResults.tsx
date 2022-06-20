
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
                height={300} //List heigth 
                rowHeight={30} //List row heigth
                width={900} // List width
                overscanRowCount={5} //How many 'invisible' items will be render both to top and botton
                rowCount={results.data.length} //How many row's will my list have
                rowRenderer={rowRenderer} //What will be rendered
            />
        </div>
    );
} 