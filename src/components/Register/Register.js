
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(u => u.email === email);

    if (userExists) {
      alert('User already exists');
    } else {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      navigate('/account');
    }
  };

  return (
    <div className="register-container space-y-4">
      <h2 className="text-2xl font-bold">Register</h2>
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
        onClick={handleRegister}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Register
      </button>

      <p className="text-center">
      Already have an account? <a href="/" className="text-blue-500 hover:underline">Login</a>
      </p>
    </div>
  );
}

export default Register;
