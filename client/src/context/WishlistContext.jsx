import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

export const WishlistContext=createContext()


const WishlistProvider = ({children}) => {
    const [wish, setWish] = useLocalStorage("wishlist")
    function addWish(product) {
        const existwish=wish.findIndex(x=>x._id===product._id)
        if (existwish===-1) {
            setWish([...wish,{...product}])
            toast.success('Successfully added wish!');
        }
        else{
            deleteWish(product)
            toast.success('Successfully deleted!');
        }
    }
    function deleteWish(product) {
        const deletedwish=wish.filter(x=>x._id!==product._id)
        setWish(deletedwish)
        toast.success('Successfully deleted!');

    }
    const data={
wish,addWish,deleteWish,setWish
    }
  return (
    <WishlistContext.Provider value={data}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
