import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';

// component imports
import Home from './pages/Home'
import Blog from './pages/Blog'
import Library from './pages/Library'
import Engagement from './pages/Engagement'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/library" element={<Library />} />
            <Route path="/engagement" element={<Engagement />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
