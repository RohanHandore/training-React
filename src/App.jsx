import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const user = true;
  return (
  
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products/:category" element={<ProductList />} />
      <Route exact path="/product/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/login" element={user ? <Home/>:<Login />} />
      <Route exact path="/register" element={user ? <Home/>:<Register />} />
    </Routes>
    

  );
};

export default App;