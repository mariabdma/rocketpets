import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <>
      <Header cartItemCount={3} onCartClick={toggleCart} />
      {cartVisible && <div>🛒 Carrinho aberto aqui</div>}
    </>
  );
}

export default App;
