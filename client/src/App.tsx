import React, { useMemo, useState } from "react";

import "./App.css";
import Content from "./components/Content/Content";
import Filter from "./components/Filter/Filter";
import { SERVER_POINT } from "./constants";

import useFetching from "./hooks/useFetching";
import Loader from "./UI/Loader/Loader";
import Error from "./UI/Error/Error";

function App() {
  const [filter, setFilter] = useState<string>("");
  const [mode, setMode] = useState(false);
  const { error, loading, cards } = useFetching(SERVER_POINT, mode, filter);
  //false - Использование возможности SPA без запроса на сервер при фильтрации
  //true - Использование нативного подхода http://127.0.0.1:5000?term=filter

  const filteredCards = useMemo(() => {
    if (!mode) {
      if (!filter) {
        return cards;
      } else {
        return cards.filter((card) => {
          return card.name.toLowerCase().includes(filter.toLowerCase());
        });
      }
    } else return cards;
  }, [cards, filter, mode]);

  return (
    <div className="App">
      <Filter filter={filter} change={setFilter}></Filter>
      {loading ? <Loader></Loader> : <Content cards={filteredCards}></Content>}
      {error ? <Error></Error> : null}
    </div>
  );
}

export default App;
