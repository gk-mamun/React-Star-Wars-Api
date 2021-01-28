import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (url) => {
    const [data, setData] = useState('');
    const [isPending, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const result = await axios(url);

                setData(result.data)
                setIsLoading(false)
            } catch (err) {
                setError('sorry!! Could not fetch data, try after a while.')
                setIsLoading(false)
            }
        }

        fetchData();

    }, [url])

    return { data, isPending, error };
}
 
export default useFetch;