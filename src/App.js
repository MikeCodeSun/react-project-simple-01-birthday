import List from "./List";
import React, { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h4>{people.length} birthday today</h4>
        <List people={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
