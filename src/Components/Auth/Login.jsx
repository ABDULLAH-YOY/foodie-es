// Login.js
import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './style.css'
import toast from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Successfully Login.')
            navigate('/main');
        } catch (error) {
            console.error('Error signing in', error);
            toast.error('Error signing in',error)
        }
    };

    return (
        <>
            <Navbar />
            <div className="body">
                <div className="login-container">
                    <h1>Login</h1>
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
                        </div>
                        <button className='btn-login' type="submit">Login</button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Login;
