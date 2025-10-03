import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
function App() {


  return (

    <Router>
   <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App;
