import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage/AuthPage';
import NewPin from './pages/NewPin';
import Board from './pages/Board';
import Home from './pages/Home';
import Profile from './pages/Profile/Profile';
import Created from './pages/Created';
import EditProfile from './pages/EditProfile/EditProfile';
import ShowPin from './pages/ShowPin/ShowPin';
import EditPin from './components/EditPin/EditPin';
import { PinContext } from './PinContext'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [pin, setPin] = useState(null);

  return (
    // <main className={styles.App}>
    <PinContext.Provider value={{ pin, setPin }}>
      <main>
        { user ?
          <>
            <Routes>
              {/* client-side route that renders the component instance if the path matches the url in the address bar */}
              <Route path="/pins" element={<Home user={user} setUser={setUser} />} />
              {/* <Route path="/pins/:id" render={props => <ShowPin {...props} state={{ pin }} user={user} setUser={setUser} />} /> */}
              <Route path="/pins/:id" element={<ShowPin user={user} setUser={setUser} />} />
              <Route path="/pins/edit/:id" element={<EditPin user={user} setUser={setUser} />} />
              <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
              <Route path="/profile/edit" element={<EditProfile user={user} setUser={setUser} />} />
              <Route path="/pins/new" element={<NewPin user={user} setUser={setUser} />} />
              <Route path="/pins/board" element={<Board user={user} setUser={setUser} />} />
              <Route path="/pins/created" element={<Created user={user} setUser={setUser} />} />
              {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
              <Route path="/*" element={<Navigate to="/pins" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
        }
      </main>
    </PinContext.Provider>
  );
}