'use client';

import React, { useState } from 'react';

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'João Silva', email: 'joao@exemplo.com' },
    { id: 2, nome: 'Maria Souza', email: 'maria@exemplo.com' },
  ]);

  const [form, setForm] = useState({ nome: '', email: '' });
  const [editingId, setEditingId] = useState(null);

  // Adicionar ou editar usuário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome || !form.email) {
      alert('Preencha todos os campos');
      return;
    }

    if (editingId) {
      // Editar
      setUsuarios((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...user, ...form } : user
        )
      );
      setEditingId(null);
    } else {
      // Adicionar
      const newUser = {
        id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
        ...form,
      };
      setUsuarios([...usuarios, newUser]);
    }

    setForm({ nome: '', email: '' });
  };

  // Carregar dados para edição
  const handleEdit = (id) => {
    const user = usuarios.find((u) => u.id === id);
    setForm({ nome: user.nome, email: user.email });
    setEditingId(id);
  };

  // Remover usuário
  const handleDelete = (id) => {
    if (confirm('Tem certeza que deseja remover este usuário?')) {
      setUsuarios((prev) => prev.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Gerenciar Usuários</h1>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="input input-bordered w-full"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="input input-bordered w-full"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div>
          <button type="submit" className="btn btn-primary">
            {editingId ? 'Salvar alterações' : 'Adicionar Usuário'}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn btn-secondary ml-4"
              onClick={() => {
                setEditingId(null);
                setForm({ nome: '', email: '' });
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista de usuários */}
      <table className="table w-full">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th className="text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-4">
                Nenhum usuário cadastrado.
              </td>
            </tr>
          )}

          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td className="text-right space-x-2">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(user.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(user.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
