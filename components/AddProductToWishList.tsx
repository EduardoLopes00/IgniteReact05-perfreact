export interface AddProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishList({
    onAddToWishList,
    onRequestClose
}: AddProductToWishListProps) {
    return (
        <span>
            Do you want to add to fav's?
            <button onClick={onAddToWishList}>Yes</button>
            <button onClick={onRequestClose}>No</button>
        </span>
    )
}

