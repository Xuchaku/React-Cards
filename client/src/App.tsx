import React, { useMemo, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Filter from "./components/Filter/Filter";
import { SERVER_POINT } from "./constants";

import useFetching from "./hooks/useFetching";
import Loader from "./UI/Loader/Loader";

function App() {
  const { error, loading, cards } = useFetching(SERVER_POINT);
  const [filter, setFilter] = useState<string>("");

  const filteredCards = useMemo(() => {
    if (!filter) {
      return cards;
    } else {
      return cards;
    }
  }, [cards]);

  return (
    <div className="App">
      <Filter filter={filter} change={setFilter}></Filter>
      {loading ? <Loader></Loader> : <Content cards={filteredCards}></Content>}
    </div>
  );
}

export default App;
