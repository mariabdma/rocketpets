import "./App.css";
import { useState } from "react";
import { Header } from "./components";
import { Home } from "./pages";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <>
      <ShoppingCartProvider>
        <Header onCartClick={toggleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          {cartVisible && <div>a</div>}
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
