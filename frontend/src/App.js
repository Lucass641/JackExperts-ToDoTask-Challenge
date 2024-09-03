import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para o backend
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-purple-500 flex items-center justify-center">
      
      <div className="mx-6 p-20 bg-white rounded-lg shadow-md ">
        <div className="text-3xl font-bold mb-4 ">
        <h1>Gerenciador de tarefas</h1>
      </div>
      <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Usuário
            </label>
            <input
              placeholder='seu email'
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <input
            placeholder='sua senha'
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500">
            Esqueceu a senha?
          </a>
        </div>
        <div className="text-center mt-4">
          <p>Não tem uma conta? <a href="#" className="text-blue-500">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;