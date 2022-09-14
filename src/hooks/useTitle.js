import { useContext, useEffect } from "react"
import { GlobalDataContext } from "../context/context";

export default function useTitle({title}){

    const { rpdata } = useContext(GlobalDataContext);

    const Name = rpdata?.dbPrincipal?.name

    useEffect(() =>{
        document.title = `${title} | ${Name} ` 
    }, [title])

    
}