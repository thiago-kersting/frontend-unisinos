import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('aluno');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // Aqui você pode lidar com a lógica de login
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    console.log('User Type: ' + userType);

    // Se o usuário for um professor, redirecione para o Painel Administrativo
    // Se o usuário for um aluno, redirecione para a Visão Geral das Turmas
    if (userType === 'professor') {
      navigate('/admin');
    } else if (userType === 'aluno') {
      navigate('/turmas');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          Tipo de usuário:
          <select value={userType} onChange={e => setUserType(e.target.value)}>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
          </select>
        </label>
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Login;
