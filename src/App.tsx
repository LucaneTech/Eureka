import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/navigation/Layout"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import Navbar from "./components/navigation/Navbar"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import ServiceDetail from "./pages/ServiceDetail"
function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navbar />}>

            <Route index element={<Home />} />
            <Route path="/solutions" element={<Services />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
          </Route>
        </Routes>

        <Routes>
          <Route path="/solution-detail" element={<ServiceDetail />} />
        </Routes>


      </Layout>


    </>
  )
}

export default App
