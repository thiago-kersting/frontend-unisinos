import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [turmas, setTurmas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTurma, setNewTurma] = useState('');

  // Carregar as turmas do localStorage quando o componente for montado
  useEffect(() => {
    const savedTurmas = localStorage.getItem('turmas');
    if (savedTurmas) {
      setTurmas(JSON.parse(savedTurmas));
    }
  }, []);

  // Salvar as turmas no localStorage sempre que elas mudarem
  useEffect(() => {
    localStorage.setItem('turmas', JSON.stringify(turmas));
  }, [turmas]);

  const handleAdd = () => {
    setTurmas([...turmas, newTurma]);
    setNewTurma('');
  };

  const handleEdit = index => {
    setNewTurma(turmas[index]);
    setEditingIndex(index);
  };

  const handleUpdate = () => {
    const updatedTurmas = [...turmas];
    updatedTurmas[editingIndex] = newTurma;
    setTurmas(updatedTurmas);
    setEditingIndex(null);
    setNewTurma('');
  };

  const handleDelete = index => {
    const updatedTurmas = [...turmas];
    updatedTurmas.splice(index, 1);
    setTurmas(updatedTurmas);
  };

  return (
    <div className="admin-panel">
      <h2>Painel Administrativo</h2>
      <input type="text" value={newTurma} onChange={e => setNewTurma(e.target.value)} />
      {editingIndex === null ? (
        <button onClick={handleAdd}>Adicionar Turma</button>
      ) : (
        <button onClick={handleUpdate}>Atualizar Turma</button>
      )}
      <ul>
        {turmas.map((turma, index) => (
          <li key={index}>
            {turma}
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
    