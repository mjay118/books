import React from "react";
import video from '../../assets/images/award.mp4'


const VideoComp = () => {
  return (
    <div className="videostyle">
     <video loop autoPlay muted
     width={"1438px"}
     >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComp;
