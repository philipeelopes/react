import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'

import Container from './components/layout/Container.js'
import NavBar from './components/layout/NavBar.js'
import Footer from './components/layout/Footer.js'


function App() {
  return (



    <Router>
      <NavBar/>

      <Container customClass="min-height">
        
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/projects' element={<Projects />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newproject' element={<NewProject />} />
         <Route path='/project/:id' element={<Project />} />

      </Routes>

        </Container>

     <Footer/>
    </Router>
  );
}

export default App;
