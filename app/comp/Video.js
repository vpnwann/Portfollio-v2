import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
