import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import Header from "./components/HeaderComponents/HeaderMain";
import MyBookedFlights from "./pages/MyBookedFlights";
function App() {

  return (
    <div className='min-h-screen w-full bg-purple-200 flex justify-center items-center flex-col '>
      <div className='bg-gray-200 p-5 rounded-2xl w-11/12 '>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/MyBookedFlights" element={<MyBookedFlights />} />
          </Routes>
        </BrowserRouter>

      </div>

    </div>



  )
}

export default App
