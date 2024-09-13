
import React, { useState } from 'react';
import './JobCard.css';

const JobCard = ({ job, onBookmarkToggle }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    onBookmarkToggle(job.id, !isBookmarked);
  };

  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-description">{job.description || 'No description available.'}</p>
      <button
        className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}
        onClick={handleBookmarkClick}
      >
        {isBookmarked ? '★' : '☆'}
      </button>
    </div>
  );
};

export default JobCard;
