import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Home/Products";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";
import Product from "./routes/Home/Products/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<NotFound />}/>
          <Route index element={<Navigate to="/home"/>} />
          <Route path="/home" element={<HomeBody />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Products />}>
            <Route path=":category" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}