import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Mac from "./components/Mac";
import Ipad from "./components/Ipad";
import Iphone from "./components/Iphone";
import Watch from "./components/Watch";
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="mac" element={<Mac />} />
              <Route path="ipad" element={<Ipad />} />
              <Route path="iphone" element={<Iphone />} />
              <Route path="watch" element={<Watch />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
