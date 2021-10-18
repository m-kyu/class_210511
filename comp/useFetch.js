import {useState,useEffect} from "react";

const useFetch = (url)=>{
    let [data, setData] = useState();
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(works => {
            setData(works);
        });
      },[url])

    return data;
}
export default useFetch;