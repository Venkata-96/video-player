import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./firebase";

function Loggin() {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        handleClose();
        alert("successfully created account");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert("please try again");
        // ..
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        handleClose();
        alert("successfully logged in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(error.message);
        // ..
      });
  };

  const signOutFromApp = () => {
    signOut(auth);
    setLoggedIn(false);
    alert("User logged out");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {loggedIn ? (
        <Button variant="primary" onClick={signOutFromApp}>
          Logout
        </Button>
      ) : (
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
      )}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>E-mail</h4>
            <input
              type="email"
              placeholder="please enter ur mail id"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input
              type="password"
              placeholder="please enter ur Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={signUp}>
              Sign up
            </Button>
            <Button variant="primary" onClick={signIn}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Loggin;