import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        // 
        const abortController = new AbortController();

        setLoading(true);
        setError(null);
        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) throw Error('Unable to retrieve data from endpoint')
                return res.json()
            })
            .then((data) => {
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch((e) => {
                if (e.name !== 'AbortError') {
                    setLoading(false);
                    setError(e.message);
                }
            });

        return () => {
            console.log("cleanup");
            abortController.abort();
        }
    }, [url])

    return { data, isLoading, error }
}

export default useFetch;