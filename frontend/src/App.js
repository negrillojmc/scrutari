import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';

// component imports
import Home from './pages/Home'
import Library from './pages/Library'
import Engagement from './pages/Engagement'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Article from './pages/blog/Article';
import IntroductionFeedStructure from './components/IntroductionFeedStructure';
import LatestFeedStructure from './components/LatestFeedStructure';
import LiteratureFeedStructure from './components/LiteratureFeedStructure';
import MethodologyFeedStructure from './components/MethodologyFeedStructure';
import AnalysisFeedStructure from './components/AnalysisFeedStructure';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<LatestFeedStructure />} />
        <Route path="/blog/introduction" element={<IntroductionFeedStructure />} />
        <Route path="/blog/literature" element={<LiteratureFeedStructure />} />
        <Route path="/blog/methodology" element={<MethodologyFeedStructure />} />
        <Route path="/blog/analysis" element={<AnalysisFeedStructure />} />
        <Route path="/library" element={<Library />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/api/blog/:id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
