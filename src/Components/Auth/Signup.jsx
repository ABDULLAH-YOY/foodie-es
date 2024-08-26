// Login.js
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './style.css'
import Navbar from '../Navbar/Navbar';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match!")
      toast.error("Passwords don't match!")
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/main');
      toast.success('Successfully Account Created!')
    } catch (error) {
      setError(error.message);
      toast.error(error)

    }
  };
  return (
    <>
      <Navbar />
      <div className="body">

        <div className="login-container">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
            <button className='btn-login' type="submit">Sign up</button>
          </form>
        </div>

      </div>
    </>
  );
}

export default Signup;
