import ItemsList from "../components/ItemsList"
import Title from "../components/Title"
import { useDispatch, useSelector } from "react-redux"
import { selectAllProducts } from "../features/products/allProductsSlice"
import { deleteFromFavorite } from "../features/products/productsSlice"
import { fetchFavoriteProducts, selectFavoriteProducts } from "../features/products/productsSlice"
import { fetchAllProducts } from "../features/products/allProductsSlice"
import { Data } from "../components/ItemCard"
import { useEffect, useState } from "react"
import { currentUser } from "../features/user"
import { AppDispatch } from "../app/store"

const FavoriteItems = () => {
    const [filteredData, setFilteredData] = useState([])
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector(selectAllProducts)
    const favorite = useSelector(selectFavoriteProducts)
    const user = useSelector(currentUser)
    
    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchFavoriteProducts())
        setFilteredData(Array.isArray(favorite) ? data.filter((item: Data) => favorite.includes(item._id)) : [])
    },[favorite.length])
    
    
    const deleteFromFavoriteHandle = (item: Data) => dispatch(deleteFromFavorite(item))
    return (
        <div className="grid place-content-center my-12">
            {!user ? (<div>You must be login in...</div>) :
            (
            <>
            <Title length={filteredData.length} title='FAVORITE ITEMS' />
            <ItemsList deleteItem={deleteFromFavoriteHandle} emptyText={'Favorite list is empty...'} itemsData={filteredData} />
            </>
            )
            }
        </div>
    )
}

export default FavoriteItems