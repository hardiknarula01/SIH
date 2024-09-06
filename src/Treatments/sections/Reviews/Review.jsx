import React from 'react';
import google from '../../../Assets/Google-Logo.png';

const Review = ({ review }) => {
  const { username, profilePic, rating, date, reviewText } = review;
  console.log(profilePic)
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-6.16 3.24L5 11.58l-5-4.73L7.58 6 10 1l2.42 5 6.58.85-5 4.73 1.16 6.66L10 15z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="review-card ">
      <div className="review-header">
        <img
          src={"profilePic"}
          alt={`${username}'s profile`}
          className="profile-pic"
        />
        <div>
          <h3>{username}</h3>
          <p>{new Date(date).toLocaleTimeString()} hours ago</p>
        </div>
      </div>
      <div className="review-stars">
        {renderStars(rating)}
      </div>
      <p className="review-text">{reviewText}</p>
      <div className="review-footer">
        <img src={google} alt="Google logo" />
        <span>Posted on Google</span>
      </div>
    </div>
  );
};

export default Review;