import "./App.css";
import { useState } from "react";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <>
      <Header cartItemCount={3} onCartClick={toggleCart} />
      <Home />
      {cartVisible && <div>a</div>}
    </>
  );
}

export default App;
