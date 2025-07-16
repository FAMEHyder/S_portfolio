import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home.jsx';
import Navbar from './Component/Nabar.jsx';
import Footer from './Component/Footer.jsx';


function App() {

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element = {<Home />}/>
      </Routes>

       {<Footer />}

    </Router>
  )
}

export default App
