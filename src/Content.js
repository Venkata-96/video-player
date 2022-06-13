import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./App.css";
import Comment from "./Comment";
const Content = (props) => {
  const [final, setFinal] = useState(props.data);
  // final.shift();
  console.log(final, "fin");
  const opts = {
    height: "390",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // const shiftHandler={
  //   props.data.shift();
  // }
  const [firstVideo, setFirstVideo] = useState({});
  useEffect(() => {
    setFirstVideo(final[0]);
  }, [final]);

  const getFirstVideo = (item) => {
    console.log(item);
    // const getClickedElement = final.find((ele) => ele.id == item.id);
    // const filteredElement = final.filter((ele) => ele.id !== item.id);
    const newData = [
      final.find((ele) => ele.id == item.id),
      ...final.filter((ele) => ele.id !== item.id),
    ];
    console.log(newData);
    setFinal(newData);
  };

  return (
    <div>
      {final && (
        <div className="container mt-3 row">
          <div className="col-lg-8">
            {firstVideo && Object.keys(firstVideo).length !== 0 && (
              <div>
                <YouTube opts={opts} videoId={firstVideo.id} />
                <h2>{firstVideo.snippet.title}</h2>
                <p>{firstVideo.snippet.description}</p>
              </div>
            )}
            <Comment />
          </div>
          <div className="col-lg-3">
            {final &&
              final.map(
                (item, index) =>
                  index > 0 && (
                    <div
                      onClick={(e) => {
                        //setFirstVideo(e.target.value); //
                        getFirstVideo(item);
                      }}
                    >
                      {/* <label>{item.id}</label> */}
                      <img
                        className="thumbnail"
                        src={`https://img.youtube.com/vi/${item.id}/1.jpg`}
                        alt=""
                      />
                      <span>{item.snippet.title}</span>
                      {/* <YouTube opts={opts} videoId={item.id} /> */}
                    </div>
                  )
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
