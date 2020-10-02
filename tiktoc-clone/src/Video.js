import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    //if the video is playing run the following code
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //stop it
    //otherwise is not stop it
    //play it
  };

  const handleVideoMouseDown = () => {
    // if (e.keyCode === 13) {
    console.log("down");
    // }
    //if the video is playing
    // if (playing) {
    //   videoRef.current.pause();
    // }

    //stop it
    //otherwise is not stop it
    //play it
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
        onKeyDown={handleVideoMouseDown}
      >
        <source src={url} type="video/mp4" />
      </video>

      {/* video footer */}
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      {/* video sidebar */}
    </div>
  );
}
// src="./"
export default Video;
