import { useState, useEffect } from "react";


const useFetch = (url, errMsg) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)

    useEffect(() => {
      const abortCont = new AbortController()

        setTimeout(() => {
          fetch(url, {signal: abortCont.signal})
            .then(res => {
              if (!res.ok === true) {
                throw Error(errMsg) 
              }
              return res.json()
            })
            .then(data => {
              setData(data);
              setIsPending(false);
              setError(null)
            })
            .catch(err => {
              if (err.name === 'AbortErrrrror'){
                console.log("fecth aborted")
              } else {
              setIsPending(false)
              setError(err.message)
            }})
        }, 1000);

        return () => abortCont.abort()
      },[url])
  
    return {data, isPending, error}
}

export default useFetch