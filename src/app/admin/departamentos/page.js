'use client';

import React, { useState } from 'react';

export default function DepartamentosPage() {
  const [departamentos, setDepartamentos] = useState([
    { id: 1, nome: 'Financeiro' },
    { id: 2, nome: 'Recursos Humanos' },
  ]);

  const [form, setForm] = useState({ nome: '' });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome) {
      alert('Preencha o nome do departamento');
      return;
    }

    if (editingId) {
      // Editar departamento
      setDepartamentos((prev) =>
        prev.map((dep) =>
          dep.id === editingId ? { ...dep, ...form } : dep
        )
      );
      setEditingId(null);
    } else {
      // Adicionar departamento
      const newDep = {
        id: departamentos.length ? departamentos[departamentos.length - 1].id + 1 : 1,
        ...form,
      };
      setDepartamentos([...departamentos, newDep]);
    }

    setForm({ nome: '' });
  };

  const handleEdit = (id) => {
    const dep = departamentos.find((d) => d.id === id);
    setForm({ nome: dep.nome });
    setEditingId(id);
  };

  const handleDelete = (id) => {
    if (confirm('Tem certeza que deseja remover este departamento?')) {
      setDepartamentos((prev) => prev.filter((dep) => dep.id !== id));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Gerenciar Departamentos</h1>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Nome do Departamento"
          className="input input-bordered w-full"
          value={form.nome}
          onChange={(e) => setForm({ nome: e.target.value })}
        />

        <div>
          <button type="submit" className="btn btn-primary">
            {editingId ? 'Salvar alterações' : 'Adicionar Departamento'}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn btn-secondary ml-4"
              onClick={() => {
                setEditingId(null);
                setForm({ nome: '' });
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista */}
      <table className="table w-full">
        <thead>
          <tr>
            <th>Nome do Departamento</th>
            <th className="text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {departamentos.length === 0 && (
            <tr>
              <td colSpan="2" className="text-center py-4">
                Nenhum departamento cadastrado.
              </td>
            </tr>
          )}

          {departamentos.map((dep) => (
            <tr key={dep.id}>
              <td>{dep.nome}</td>
              <td className="text-right space-x-2">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(dep.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(dep.id)}
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
