import { useQuery } from "@tanstack/react-query"
import { fetechProduct } from "../api/ProductApI"




export let UseproductApi = () => {
    return useQuery({
        queryKey: ['repoData'],
        queryFn: fetechProduct, 
        staleTime : 3000,
    })
}

