// import Axios from "axios";
import Axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);
  return (
    // BEM Naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              messages={messages}
              likes={likes}
              shares={shares}
            />
          )
        )}
      </div>

      {/* app container */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
      {/* video */}
    </div>
  );
}

export default App;
