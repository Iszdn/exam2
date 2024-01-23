import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

export const BasketContext=createContext()


const BasketProvider = ({children}) => {
    const [basket, setbasket] = useLocalStorage("basketlist")
    const subtotal=basket.reduce((initial,product)=>initial+parseInt(product.total),0)


    function addbasket(product) {
        const existbasket=basket.findIndex(x=>x._id===product._id)
        if (existbasket!==-1) {
          basket[existbasket].count++
          basket[existbasket].total=basket[existbasket].price*basket[existbasket].count
          setbasket([...basket])
          toast.success('Successfully increased!');
        }
        else{
            const total=product.price
             setbasket([...basket,{...product,count:1,total:total}])
             
            toast.success('Successfully added basket!');
        }
        
        
    }
    
    function incbasket(product) {
        const existbasket=basket.findIndex(x=>x._id===product._id)
        if (existbasket!==-1) {
          basket[existbasket].count++
          basket[existbasket].total=basket[existbasket].price*basket[existbasket].count
          setbasket([...basket])
          toast.success('Successfully increased!');
        } 
    }
   
    function decbasket(product) {
        const existbasket=basket.findIndex(x=>x._id===product._id)
        if (existbasket!==-1) {
            if (basket[existbasket].count===1) {
                return deletebasket(product)
            }
          basket[existbasket].count--
          basket[existbasket].total=basket[existbasket].price*basket[existbasket].count
          setbasket([...basket])
          toast.success('Successfully decreased!');
        } 
    }

    function deletebasket(product) {
        const deletedbasket=basket.filter(x=>x._id!==product._id)
        setbasket(deletedbasket)
        toast.success('Successfully deleted!');

    }
    const data={
basket,addbasket,deletebasket,setbasket,incbasket,decbasket,subtotal
    }
  return (
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider