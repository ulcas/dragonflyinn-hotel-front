"use client"

import { useEffect, useState } from 'react';

export default function Home() {
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedQuarto, setSelectedQuarto] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    quarto_id: '',
    periodo_de: '',
    periodo_ate: '',
  });

  useEffect(() => {
    async function fetchQuartos() {
      try {
        const response = await fetch('http://localhost:8000/api/quarto');
        const data = await response.json();
        setQuartos(data);
      } catch (error) {
        console.error('Erro ao buscar quartos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuartos();
  }, []);

  const handleOpenModal = (quarto) => {
    setSelectedQuarto(quarto);
    setFormData({
      ...formData,
      quarto_id: quarto.id,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      nome: '',
      email: '',
      quarto_id: '',
      periodo_de: '',
      periodo_ate: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/reserva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Reserva feita com sucesso!');
        handleCloseModal();
        window.location.reload();
      } else {
        alert('Erro ao fazer a reserva.');
        window.location.reload();
      }
    } catch (error) {
      alert('Erro ao fazer a reserva.');
      window.location.reload();
    }
  };

  if (loading) {
    return <p className="loading">Carregando...</p>;
  }

  return (
    <div className="container">
      <h1 className="title">Lista de Quartos Disponíveis</h1>
      <div className="quartos">
        {quartos.length > 0 ? (
          quartos.map((quarto) => (
            <div key={quarto.id} className="quarto-card">
              <h2>{quarto.nome}</h2>
              <p className="capacidade">Capacidade {quarto.capacidade}</p>
              <p className="description">{quarto.descricao}</p>
              <button className="btn" onClick={() => handleOpenModal(quarto)}>
                Fazer Reserva
              </button>
            </div>
          ))
        ) : (
          <p className="no-quartos">
            Não há quartos disponíveis no momento. Tente novamente mais tarde.
          </p>
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Reservar Quarto: {selectedQuarto.nome}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Período (De):
                <input
                  type="date"
                  name="periodo_de"
                  value={formData.periodo_de}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Período (Até):
                <input
                  type="date"
                  name="periodo_ate"
                  value={formData.periodo_ate}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="btn-submit">
                Confirmar Reserva
              </button>
              <button type="button" className="btn-cancel" onClick={handleCloseModal}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
