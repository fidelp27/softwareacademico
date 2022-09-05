import React from 'react';
import { useUser } from '../../context/authContext';

const PhotoContainer = () => {
  const user = useUser();
  return (
    <div className="photo-container">
      <img src="https://i.imgur.com/OED6iZp.jpg" alt="profile" />
      <h2>{user}</h2>
    </div>
  );
};
export default PhotoContainer;
