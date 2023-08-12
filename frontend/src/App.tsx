import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";
import { AddForm } from "./components/AddForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddForm />} />
      <Route path="/edit/:id" element={<AddForm />} />
    </Routes>
  );
}

export default App;
