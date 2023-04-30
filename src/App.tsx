import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MacList from "./components/MacList";
import IpadList from "./components/IpadList";
import IphoneList from "./components/IphoneList";
import WatchList from "./components/WatchList";
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import Iphone14Pro from "./components/iphones/Iphone14Pro";
import Iphone14 from "./components/iphones/Iphone14";
import Iphone13 from "./components/iphones/Iphone13";
import Iphone12 from "./components/iphones/Iphone12";
import IphoneSe from "./components/iphones/IphoneSe";
import Ipad from "./components/ipads/Ipad";
import IpadAir from "./components/ipads/IpadAir";
import IpadMini from "./components/ipads/IpadMini";
import IpadPro from "./components/ipads/IpadPro";
import Imac from "./components/macs/Imac";
import MacBookAir from "./components/macs/MacBookAir";
import MacBookPro from "./components/macs/MacBookPro";
import MacMini from "./components/macs/MacMini";
import AppleWatchHermes from "./components/watches/AppleWatchHermes";
import AppleWatchSe from "./components/watches/AppleWatchSe";
import AppleWatchSeries8 from "./components/watches/AppleWatchSeries8";
import AppleWatchUltra from "./components/watches/AppleWatchUltra";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="iphone" element={<IphoneList />} />
              <Route path="ipad" element={<IpadList />} />
              <Route path="mac" element={<MacList />} />
              <Route path="watch" element={<WatchList />} />
              <Route path="*" element={<NotFound />} />
              <Route path="iphone14Pro" element={<Iphone14Pro />} />
              <Route path="iphone14" element={<Iphone14 />} />
              <Route path="iphone13" element={<Iphone13 />} />
              <Route path="iphone12" element={<Iphone12 />} />
              <Route path="iphoneSE" element={<IphoneSe />} />
              <Route path="ipad10" element={<Ipad />} />
              <Route path="ipadAir" element={<IpadAir />} />
              <Route path="ipadMini" element={<IpadMini />} />
              <Route path="ipadPro" element={<IpadPro />} />
              <Route path="imac" element={<Imac />} />
              <Route path="macBookAir" element={<MacBookAir />} />
              <Route path="macBookPro" element={<MacBookPro />} />
              <Route path="macMini" element={<MacMini />} />
              <Route path="appleWatchHermes" element={<AppleWatchHermes />} />
              <Route path="appleWatchSe" element={<AppleWatchSe />} />
              <Route path="appleWatchSeries8" element={<AppleWatchSeries8 />} />
              <Route path="appleWatchUltra" element={<AppleWatchUltra />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
