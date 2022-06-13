import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase";

function Comment() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const getData = (e) => {
    setData(e.target.value);
    setPrint(false);
  };
  const [showCommentBox, setShowCommentBox] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowCommentBox(true);
      } else {
        setShowCommentBox(false);
      }
    });
  }, []);

  return (
    <>
      {showCommentBox ? (
        <div>
          <input type="text" onChange={getData} />
          <button className="btn btn-dark" onClick={() => setPrint(true)}>
            Comment
          </button>
          {print ? <h1> {data}</h1> : null}
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

export default Comment;
