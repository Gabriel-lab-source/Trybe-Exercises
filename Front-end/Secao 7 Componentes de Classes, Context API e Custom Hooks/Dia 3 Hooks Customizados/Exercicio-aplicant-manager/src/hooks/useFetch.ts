import { useEffect, useState } from 'react';
import { PersonType } from '../types';

export default function useFetch(url: string) {
  const [data, setData] = useState<PersonType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const apiFetch = await fetch(url);
      const response = await apiFetch.json();
      setData(response.results);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    data,
    loading,
    error,
    fetchApi,
  };
}
