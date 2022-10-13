import { useEffect, useState } from "react";
import CardType from "../types/CardType";
import api from "../services/API";

function useFetching(url: string) {
  const [cards, setCards] = useState<CardType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response: Error | CardType[] = await api.getData(url);
      setLoading(true);
      if (response instanceof Error) {
        setCards([]);
        throw new Error(response.message);
      } else {
        setCards(response);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return {
    error,
    loading,
    cards,
  };
}
export default useFetching;
