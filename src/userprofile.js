import React, { useState, useEffect } from "react";
import { auth, database } from "./firebase";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const user = await database
          .ref(`/users/${userAuth.uid}`)
          .once("value");
        setUser(user.val());

        const appointments = await database
          .ref(`/appointments`)
          .orderByChild("userId")
          .equalTo(userAuth.uid)
          .once("value");
        setAppointments(appointments.val());
      } else {
        setUser(null);
        setAppointments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>User Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <h2>Appointments</h2>
          {appointments ? (
            <ul>
              {Object.entries(appointments).map(([id, appointment]) => (
                <li key={id}>
                  {appointment.date} - {appointment.time}
                </li>
              ))}
            </ul>
          ) : (
            <p>No appointments found</p>
          )}
        </div>
      ) : (
        <p>Please sign in to view your profile</p>
      )}
    </div>
  );
};

export default UserProfile;
