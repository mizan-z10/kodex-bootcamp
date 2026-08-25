
export let Storage =  {
    set: (key, val) => {
        localStorage.setItem(key, JSON.stringify(val));
        
    },
    get:(key)=>{
        let data = localStorage.getItem(key);
        return JSON.parse(data);
    },
    remove : (key) => {
        localStorage.removeItem(key);
    
    },

}