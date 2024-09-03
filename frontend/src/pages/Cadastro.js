import React, { useState } from 'react';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para o backend
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Terms Accepted:', termsAccepted);
  };

  return (
    <div className="min-h-screen bg-purple-500 flex items-center justify-center">
      <div className="bg-white p-20 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Usuário
            </label>
            <input
              placeholder='seu Nome'
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
            placeholder='Seu email'
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <input
            placeholder='Sua Senha'
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Repita sua senha
            </label>
            <input
            placeholder='Repita sua senha'
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Criar Conta
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Já tem conta? <a href="#" className="text-blue-500">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;