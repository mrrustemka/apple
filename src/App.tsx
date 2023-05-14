import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import ProductType from "./components/ProductType";
import "./App.css";
import ProductModel from "./components/ProductModel";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/:slug" element={<ProductType />} />
              <Route path="*" element={<NotFound />} />
              <Route path=":slug/:link" element={<ProductModel />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
