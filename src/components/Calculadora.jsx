import React, { useState } from 'react';

export default function Calculadora() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operador, setOperador] = useState(null);
  const [resposta, setResposta] = useState('');
  const [pontos, setPontos] = useState(0); 

  const operadores = ['+', '-', '*'];

  const sortear = () => {
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
    const op = operadores[Math.floor(Math.random() * operadores.length)];
    setNum1(n1);
    setNum2(n2);
    setOperador(op);
    setResposta('');
  };

  const validar = () => {
    let resultado;
    if (operador === '+') resultado = num1 + num2;
    if (operador === '-') resultado = num1 - num2;
    if (operador === '*') resultado = num1 * num2;

    if (parseInt(resposta) === resultado) {
      setPontos(pontos + 1);
    } else {
      alert("Resposta errada!");
    }
  };

  const novoJogo = () => {
    setPontos(0);
    setNum1(null);
    setNum2(null);
    setOperador(null);
    setResposta('');
  };

  return (
    <div
      className="p-6 rounded-2xl shadow-md text-black w-full max-w-xs"
      style={{ backgroundColor: '#d7b9ff' }} // cor roxinha exata
    >
      <h2 className="text-lg font-bold mb-4 text-center">
        Você tem {pontos} ponto(s)
      </h2>

      <div className="flex flex-col gap-2">
        <button
          onClick={sortear}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2"
        >
          🎲 Sortear Desafio
        </button>

        {operador && (
          <>
            <div className="text-center mt-4">
              <p className="text-base">Quanto é:</p>
              <div className="text-2xl font-bold my-1">{num1} {operador} {num2}</div>

              <p className="mb-1">Sua resposta:</p>
              <input
                className="text-black px-3 py-1 rounded w-full text-center"
                type="number"
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={validar}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
              >
                ✅ Validar
              </button>
              <button
                onClick={novoJogo}
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded"
              >
                🔄 Novo Jogo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
