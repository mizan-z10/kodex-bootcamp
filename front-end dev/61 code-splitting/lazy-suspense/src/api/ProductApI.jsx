import axios from "axios";


export let  fetechProduct = async () => {
    console.log("api is triggered");
    let res = await axios.get("https://dummyjson.com/products");
    return res
};