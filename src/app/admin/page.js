'use client';

import React, { useState } from 'react';

export default function Admins() {
  // Estado inicial com alguns admins
  const [admins, setAdmins] = useState([
    { id: 1, username: 'admin1', email: 'admin1@empresa.com' },
    { id: 2, username: 'admin2', email: 'admin2@empresa.com' },
  ]);

  const [form, setForm] = useState({ username: '', email: '' });
  const [editingId, setEditingId] = useState(null);

  // Adicionar ou editar admin
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email) {
      alert('Preencha todos os campos');
      return;
    }

    if (editingId) {
      // Editar
      setAdmins((prev) =>
        prev.map((admin) =>
          admin.id === editingId ? { ...admin, ...form } : admin
        )
      );
      setEditingId(null);
    } else {
      // Adicionar
      const newAdmin = {
        id: admins.length ? admins[admins.length - 1].id + 1 : 1,
        ...form,
      };
      setAdmins([...admins, newAdmin]);
    }

    setForm({ username: '', email: '' });
  };

  // Editar admin: carregar dados no formulário
  const handleEdit = (id) => {
    const admin = admins.find((a) => a.id === id);
    setForm({ username: admin.username, email: admin.email });
    setEditingId(id);
  };

  // Remover admin
  const handleDelete = (id) => {
    if (confirm('Tem certeza que deseja remover este admin?')) {
      setAdmins((prev) => prev.filter((admin) => admin.id !== id));
    }
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-6">Gerenciar Admins</h1>

      {/* Formulário de adicionar/editar */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Usuário"
          className="input input-bordered w-full"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="input input-bordered w-full"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <button type="submit" className="btn btn-primary">
          {editingId ? 'Salvar alterações' : 'Adicionar Admin'}
        </button>

        {editingId && (
          <button
            type="button"
            className="btn btn-secondary ml-4"
            onClick={() => {
              setEditingId(null);
              setForm({ username: '', email: '' });
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      {/* Lista de admins */}
      <table className="table w-full">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>E-mail</th>
            <th className="text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {admins.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-4">
                Nenhum admin cadastrado.
              </td>
            </tr>
          )}

          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.username}</td>
              <td>{admin.email}</td>
              <td className="text-right space-x-2">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(admin.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(admin.id)}
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
