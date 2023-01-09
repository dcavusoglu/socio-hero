import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useState, useEffect } from "react";
import { firebaseAuth } from "../../Firebase";
import { useNavigate } from "react-router-dom";


const CurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

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
        navigate('/');
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
            className="text-white bg-orange-200 py-1 px-4 rounded-lg my-2"
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
