import { useEffect, useCallback, useReducer } from 'react';

export default ()=> {
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }), {
    data: null,
    error: false,
    loading: true,
  });

  const getData = useCallback(async(url)=>{
    try{
      const data = await fetch(url);
      const result = await data.json();
      return result;
    }
    catch(e){
      console.log(e);
    }
  });

  const getAllData = useCallback(async()=> {
    const localData = window.localStorage.getItem("indicators");
      try{
        const urls = ["https://mindicador.cl/api/uf", "https://mindicador.cl/api/utm", "https://mindicador.cl/api/dolar"];
        const data = await Promise.all(urls.map(url => getData(url)));
        const indicators = {
          date: Date.now(),
          uf: data[0].serie[0].valor,
          utm: data[1].serie[0].valor,
          dollar: data[2].serie[0].valor,
        };
  
        console.log("ALL DATA RATE TODAY", indicators);
        window.localStorage.setItem("indicators", JSON.stringify(indicators));
        setQuery({ loading: false, error: false, data: indicators });
      }
      catch(e){
        console.log(e);
        setQuery({ loading: false, error: true, data: null });
      }
  });

  useEffect(()=>{
    if(window !== "undefined"){
      getAllData();
    }
  },[]);

  return query;
}