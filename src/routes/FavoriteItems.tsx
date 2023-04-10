import ItemsList from "../components/ItemsList"
import Title from "../components/Title"
import { useDispatch, useSelector } from "react-redux"
import { selectAllFavoriteProducts } from "../features/products/allProductsSlice"
import { deleteFromFavorite } from "../features/products/allProductsSlice"
import { Data } from "../components/ItemCard"

const FavoriteItems = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectAllFavoriteProducts)
    const deleteFromFavoriteHandle = (item: Data) => dispatch(deleteFromFavorite(item))
    return (
        <div className="grid place-content-center my-12">
            <Title length={data.length} title='FAVORITE ITEMS' />
            <ItemsList deleteItem={deleteFromFavoriteHandle} emptyText='Favorite list is empty...' itemsData={data} />
        </div>
    )
}

export default FavoriteItems