import Anasayfa from "./components/Anasayfa.jsx";
import Footer from "./components/AnasayfaFooter.jsx";
import SiparisOlustur from "./components/SiparisOlustur.jsx";
import SiparisBasarili from "./components/SiparisBasarili.jsx";

import "./App.css";


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


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
      <Footer />
    </Router>
  );
}

export default App;