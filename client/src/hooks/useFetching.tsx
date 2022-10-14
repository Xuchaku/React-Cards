import { useEffect, useMemo, useState } from "react";
import CardType from "../types/CardType";
import api from "../services/API";
import { debounce } from "lodash";

function useFetching(url: string, mode: boolean, filter: string) {
  const [cards, setCards] = useState<CardType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isInit, setIsInit] = useState<boolean>(false);

  useEffect(() => {
    if (!mode && !isInit) {
      memoDebounce();
      setIsInit(true);
    }
    if (mode) {
      memoDebounce(filter);
    }
  }, [mode, filter, isInit]);

  const memoDebounce = useMemo(() => {
    return debounce(async function fetchData(query?: string) {
      try {
        const response: Error | CardType[] = await api.getData(url, query);
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
    }, 300);
  }, []);
  return {
    error,
    loading,
    cards,
  };
}
export default useFetching;
