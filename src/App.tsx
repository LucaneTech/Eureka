import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/navigation/Layout"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import Navbar from "./components/navigation/Navbar"
function App() {

  return (
    <>
      <Layout>
        <Routes>
           <Route path="/" element={<Navbar />}>
                  
              <Route index element={<Home />} />
              <Route path="/solutions" element={<Services />} />
           </Route>
        </Routes>
      </Layout>


    </>
  )
}

export default App
