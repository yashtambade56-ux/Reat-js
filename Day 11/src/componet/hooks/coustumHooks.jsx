import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
        useEffect(() => {
            let isMounted = true;
            setLoading(true);
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    if (isMounted) {
                        setData(data);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    if (isMounted) {
                        setError(error);
                        setLoading(false);
                    }
                });
            return () => { isMounted = false; };
        }, [url]);
    
        return { data, loading, error };
}

export default useFetch;