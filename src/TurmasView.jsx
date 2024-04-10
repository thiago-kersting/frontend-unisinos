import React, { useState } from 'react';
import './TurmasView.css';
import { Link } from 'react-router-dom';

function TurmasView() {
  // Mock de algumas turmas
  const turmas = ['Turma 1', 'Turma 2', 'Turma 3'];
  const [selectedTurma, setSelectedTurma] = useState(null);

  const handleOpenModal = (turma) => {
    setSelectedTurma(turma);
  };

  const handleCloseModal = () => {
    setSelectedTurma(null);
  };

  const handleMatricular = () => {
    // Aqui você pode adicionar a lógica para matricular o aluno na turma
    console.log('Aluno matriculado na turma: ' + selectedTurma);
    setSelectedTurma(null);
  };

  return (
    <div className="turmas-view">
        <Link to='/minhas-turmas'>Minhas turmas</Link>
      <h2>Visão Geral das Turmas</h2>
      <ul>
        {turmas.map((turma, index) => (
          <li key={index}>
            <button onClick={() => handleOpenModal(turma)}>{turma}</button>
          </li>
        ))}
      </ul>
      {selectedTurma && (
        <div className="modal-background" onClick={handleCloseModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Detalhes da Turma</h2>
            <p>{selectedTurma}</p>
            <button onClick={handleMatricular}>Matricular</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TurmasView;
