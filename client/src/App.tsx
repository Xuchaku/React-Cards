import React, { useMemo, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Filter from "./components/Filter/FIlter";
import useFetching from "./hooks/useFetching";

function App() {
  const { error, loading, cards } = useFetching("");
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
      <Filter></Filter>
      {loading ? "" : <Content cards={filteredCards}></Content>}
    </div>
  );
}

export default App;
