import Anasayfa from "../components/anasayfa.jsx";
import SiparisBasarili from "../components/siparisbasarili.jsx";
import SiparisOlustur from "../components/siparisolustur.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/siparisbasarili.css";
// import './App.css' yazasark tüm css inline ortadan kalkar.

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footter from "../components/footter";

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