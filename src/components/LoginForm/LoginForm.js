// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.css';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className={styles.LoginForm}>
    <div className="form-container" onSubmit={handleSubmit}>
      <form className='form' autoComplete="off" >
        <label>Email</label>
        <br />
        <input className='inputBox' type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
        <br />
        <label>Password</label>
        <br />
        <input className='inputBox' type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
        <br />
        <br />
        <button className='submit' type="submit">LOG IN</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}