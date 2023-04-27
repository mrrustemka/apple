import { BrowserRouter, Routes, Route } from "react-router-dom";
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
              <Route index element={<Mac />} />
              <Route path="about" element={<Ipad />} />
              <Route path="contacts" element={<Iphone />} />
              <Route path="courses" element={<Watch />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
