import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useState, useEffect } from "react";
import { firebaseAuth } from "../../Firebase";

const CurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        console.log("signed out successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {currentUser ? (
        <>
          {" "}
          <p>{`Signed In ${currentUser.email}`}</p>{" "}
          <button
            onClick={handleSignOut}
            className="bg-pink-200"
          >
            Sign Out
          </button>{" "}
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default CurrentUser;
