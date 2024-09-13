
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Jobs.css'

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        
        
        console.log(response.data);
        
        
        if (response.data && Array.isArray(response.data.results)) {
          setJobs(prevJobs => [...prevJobs, ...response.data.results]);
        } else {
          console.log('Unexpected response format:', response.data);
          setError('Unexpected data format');
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Error fetching jobs');
      } finally {
        setLoading(false);
      }
    };
  
    fetchJobs();
  }, [page]);
  
  
  const loadMoreJobs = () => {
    setPage(prevPage => prevPage + 1);
  };

  
  const bookmarkJob = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    if (!bookmarks.some(bookmarkedJob => bookmarkedJob.id === job.id)) {
      bookmarks.push(job);
      localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarks));
      alert('Job bookmarked!');
    } else {
      alert('This job is already bookmarked.');
    }
  };

  return (
    <div className='jobs-container'>
      <h1 className='jobs-header'>Jobs</h1>
      {error && <p>{error}</p>}
      {jobs.length === 0 && !loading && !error && <p>No jobs available.</p>}
      {jobs.length > 0 && (
        <ul className='job-list'>
          {jobs.map(job => (
            <li key={job.id} className='job-card'>
              {job.title}
              
              <button onClick={() => bookmarkJob(job)}>Bookmark</button>
            </li>
          ))}
        </ul>
      )}
      {loading && <p>Loading...</p>}
      
      {!loading && !error && (
        <button onClick={loadMoreJobs}>Load More Jobs</button>
      )}
    </div>
  );
};

export default Jobs;
