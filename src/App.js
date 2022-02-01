import Alarm from "./Pages/Alarm";
import GlobalStyle from "./style/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Pages/Footer";

import SetAlarm from "./Pages/SetAlarm";
import Sekundomer from "./Components/Sekundomer";

function App() {
  return (
      <div className={"timerBlock"}>
          <GlobalStyle />
            <div className={"main"}>
                <Routes>
                    <Route exact path="/" element={<Alarm/>} />
                    <Route path="/setAlarm" element={<SetAlarm/>} />
                    <Route path="/secondomer" element={<Sekundomer/>} />
                </Routes>
            </div>
          <Footer />
      </div>
  );
}

export default App;
