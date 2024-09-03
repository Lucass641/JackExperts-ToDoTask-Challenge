import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500">
            Forgot password?
          </a>
        </div>
        <div className="text-center mt-4">
          <p>Or Sign Up Using</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-700 text-white rounded-full p-2">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="bg-red-600 text-white rounded-full p-2">
              <i className="fab fa-google"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;