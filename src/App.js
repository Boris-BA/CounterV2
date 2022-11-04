import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState([0, <Counter />]);
  console.log(tab[0]);
  tab[0] = 1;
  console.log(tab[0]);
  // const [tab, setTab] = useState([1, 2, 3]);
  // const tab2 = [<p>Rob</p>, <p>Sansa</p>, <p>Jon</p>];
  // console.log(tab);
  return (
    <div className="App">
      <div className="container">
        <div className="button1">
          <button
            onClick={() => {
              // console.log("click");
              // console.log(tab.length);
              if (tab.length < 4) {
                const newTab = [...tab, <Counter />];
                setTab(newTab);
                setTab((newTab[0] = 1));
                console.log(tab[0]);
              }
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              const newTab = [...tab];
              newTab.pop();
              setTab(newTab);
            }}
          >
            Remove
          </button>
        </div>
        <Counter></Counter>

        {/* {console.log()} */}
        {/* <div className="container-counter">{tab.slice(1)}</div> */}
        {/* <div className="container-counter">{tab}</div> */}
        {/* {tab2} */}
        {/* <Counter /> */}
      </div>
    </div>
  );
}

export default App;
