import { useState } from "react";
import "./App.css";
import StripeContainer from "./components/StripeContainer";
import chocolate from "./assest/chocolate.png";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>EL Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$10.00</h3>
          <img src={chocolate} alt="chocolate" />
          <button onClick={() => setShowItem(true)}>Buy</button>
        </>
      )}
    </div>
  );
}

export default App;
