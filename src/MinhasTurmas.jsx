import React from 'react';
import { Link } from 'react-router-dom';
import './MinhasTurmas.css';

function MinhasTurmas() {
  // Mock de algumas turmas em que o aluno está matriculado
  const turmas = ['Turma 1', 'Turma 3'];

  return (
    <div className="minhas-turmas">
      <h2>Minhas Turmas</h2>
      <ul>
        {turmas.map((turma, index) => (
          <li key={index}>{turma}</li>
        ))}
      </ul>
      <Link to="/turmas">Ver todas as turmas</Link>
    </div>
  );
}

export default MinhasTurmas;
