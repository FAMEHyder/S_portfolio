import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home.jsx';
import Navbar from './Component/Nabar.jsx';
import Contact from './Component/Contact.jsx';


function App() {

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path ='/contact'  element = {<Contact />}/>
      </Routes>


    </Router>
  )
}

export default App
