// src/components/JobDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs/${id}`);
        setJob(response.data);
      } catch (err) {
        setError('Error fetching job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {job && (
        <>
          <h1>{job.title}</h1>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.phone}</p>
          <p>{job.description}</p>
        </>
      )}
    </div>
  );
};

export default JobDetails;
