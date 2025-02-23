import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/pk/home";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rewards from "./pages/rewards/Rewards";

function App() {
  const { i18n } = useTranslation(); // i18n to change language

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
