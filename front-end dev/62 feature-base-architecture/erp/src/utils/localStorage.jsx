let Storage =  {
    set: (key, val) => {
        let data = localStorage.setItem(key, JSON.stringify(val));
        return data;
    },
    get:(key)=>{
        let data = localStorage.getItem(key);
        return JSON.parse(data);
    },
    remove : (key) => {
        localStorage.removeItem(key);
    
    },

}