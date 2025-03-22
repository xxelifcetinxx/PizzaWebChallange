import Anasayfa from "./components/Anasayfa.jsx";
import SiparisBasarili from "./components/SiparisBasarili.jsx";
import SiparisOlustur from "./components/SiparisOlustur.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/SiparisBasarili.css";



import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footter from "./components/Footter.jsx";

function App() {
  const [verilenSiparis, setVerilenSiparis] = useState();
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/siparis-olustur">
            <SiparisOlustur setVerilenSiparis={setVerilenSiparis} />
          </Route>
          <Route path="/siparis-basarili">
            <SiparisBasarili verilenSiparis={verilenSiparis} />
          </Route>
        </Switch>
      </div>
      <Footter />
    </Router>
  );
}

export default App;