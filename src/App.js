
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jobs from './components/Jobs';
import Bookmarks from './components/Bookmarks';
import JobDetails from './components/JobDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
        <div className="bottom-nav">
          <a href="/">Jobs</a>
          <a href="/bookmarks">Bookmarks</a>
        </div>
      </div>
    </Router>
  );
};

export default App;
