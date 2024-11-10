import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Image from "./pages/Images"
import NoticesPage from "./pages/Notices"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/images" element={<Image />} />
      <Route path="/notices" element={<NoticesPage />} />
    </Routes>
  )
}

export default App
