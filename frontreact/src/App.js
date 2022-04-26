import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Shows1 from "./pages/Shows1"
import Shows2 from "./pages/Shows2"
import Shows3 from "./pages/Shows3"
import Shows4 from "./pages/Shows4"
import Shows5 from "./pages/Shows5"
import Shows6 from "./pages/Shows6"
import Carrinho from "./pages/Carrinho"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/shows1" element={<Shows1 />} />
        <Route path="/shows2" element={<Shows2 />} />
        <Route path="/shows3" element={<Shows3 />} />
        <Route path="/shows4" element={<Shows4 />} />
        <Route path="/shows5" element={<Shows5 />} />
        <Route path="/shows6" element={<Shows6 />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
