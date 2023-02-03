import React, { useState } from "react";
import { auth } from "./firebase";
import { Link } from 'react-router-dom';
import UserProfile from "./userprofile";
// import UserProfile from "./userprofile";

function Home() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <div><UserProfile/></div>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>Please sign in</h1>
          <button >
          <Link to="/login">Login</Link>
          </button>
          <button >
          <Link to="/signup">SignUp</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
