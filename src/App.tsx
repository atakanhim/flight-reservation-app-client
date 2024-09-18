import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import MyReservedFlights from "./pages/MyReservedFlights";
import { useEffect } from "react";
function App() {
  useEffect(() => {

    console.log("reserverd");
  }, [])
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/MyReservedFlights" element={<MyReservedFlights />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
