import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage';
import NewPin from './pages/NewPin';
import Board from './pages/Board';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    // <main className={styles.App}>
    <main>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/pins/new" element={<NewPin user={user} setUser={setUser} />} />
            <Route path="/pins/board" element={<Board user={user} setUser={setUser} />} />
            <Route path="/pins" element={<Home user={user} setUser={setUser} />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/pins" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}