import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/navigation/Layout"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import Navbar from "./components/navigation/Navbar"
import About from "./pages/About"
function App() {

  return (
    <>
      <Layout>
        <Routes>
           <Route path="/" element={<Navbar />}>
                  
              <Route index element={<Home />} />
              <Route path="/solutions" element={<Services />} />
               <Route path="/apropos" element={<About />} />
           </Route>
        </Routes>
      </Layout>


    </>
  )
}

export default App
