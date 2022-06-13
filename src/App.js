import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Content from "./Content";
import "./App.css";
const App = () => {
  // const [videos, setVideos] = useState([]);
  // const [firstVideo, setFirstVideo] = useState("");
  // const [isVideoLoading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);
  const [isload, setIsload] = useState(false);

  useEffect(() => {
    setIsload(true);

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&key=${"AIzaSyCh2a69l920CkK0wL_egEdF1MzQ5qN3wqE"}`
      )
      .then((response) => {
        //setFirstVideo(getFirstVideo.id);
        setVideo(response.data.items);
        setIsload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      {isload ? (
        <h1 className="spinner">LOADING...</h1>
      ) : (
        <Content data={video} />
      )}
    </div>
  );
};

export default App;
