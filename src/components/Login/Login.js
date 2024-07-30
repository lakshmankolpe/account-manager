
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/account');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Login
      </button>
      <p className="text-center">
        Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
      </p>
    </div>
  );
}

export default Login;
