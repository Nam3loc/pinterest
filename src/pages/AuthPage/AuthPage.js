import SignUpForm from "../../components/SignUpForm"
import LoginForm from "../../components/LoginForm"
import { useState } from 'react';
import styles from './AuthPage.module.css';
import Logo from "../../components/Logo";

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <main className={styles.AuthPage}>
        <div className="authForm">
          <Logo />
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </main>
    );
  }