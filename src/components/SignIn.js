import React, { useEffect } from "react";
import firebase, { ui } from "../app/firebase";
import { useHistory } from "react-router-dom";
import "../css/SignIn.css";
import { useDispatch } from "react-redux";
import { SET_USER } from "../features/user/userSlice";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    ui.start(".signIn", {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          //dispatch(SET_USER(authResult.user.displayName));
          history.push("/");
          //console.log(authResult.user.displayName);
          return false;
        },
      },
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
      ],
    });
  }, [dispatch, history]);

  // I have used the build in firebase-ui functiolity instead of the code below

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       setErrorMessage("");
  //       dispatch(SET_USER(user.user.email));
  //       history.push("/");
  //     })
  //     .catch(function (error) {
  //       // Handle Errors here.
  //       //var errorCode = error.code;
  //       setErrorMessage("Incorrect credentials.");
  //     });
  // };

  return (
    <div className="signIn">
      {/* Here it will be appended the firebase-ui code. The code below is a personal approach */}

      {/* <h1>Sign-In</h1>
      {errorMessage && <p className="signIn_errorMessage">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form> */}
    </div>
  );
}

export default SignIn;
