// src/components/Bookmarks.js
import React, { useState, useEffect } from 'react';

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    setBookmarkedJobs(savedBookmarks);
  }, []);

  return (
    <div className='bookmarked-container'>
      <h1 className='bookmarked-header'>Bookmarked Jobs</h1>
      {bookmarkedJobs.length === 0 ? (
        <p>No jobs bookmarked yet.</p>
      ) : (
        bookmarkedJobs.map(job => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmarks;
