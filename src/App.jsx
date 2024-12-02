
import Navbar from './components/navbar';
import './index.css'
import Landing from './pages/landing'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
     
      <BrowserRouter>
      <Navbar/>   
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/*" element={<PageNotFound />} /> */}

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      
      
    </>
  )
}

export default App
