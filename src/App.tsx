import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Client from "./pages/client/Client";
import Delivery from "./pages/delivery/Delivery";
import Pizzeria from "./pages/pizzeria/Pizzeria";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/pizzeria" element={<Pizzeria />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
