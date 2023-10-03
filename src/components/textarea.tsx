import React, { useState } from "react";

interface TextAreaProps {
  message?: string;
  textArea: string;
  rows: number;
}

export default function Textarea({ message, textArea, rows }: TextAreaProps) {
  const [texto, setTexto] = useState<string>(textArea);
  const [copiado, setCopiado] = useState<boolean>(false);

  const copiarTexto = () => {
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        setCopiado(true);
      })
      .catch((error) => {
        console.error("Erro ao copiar texto: ", error);
      });
  };

  return (
    <>
      <div className="relative rounded bg-gray-800 max-w-7xl mx-auto">
        <textarea
          id="message"
          rows={rows}
          className="bg-gray-800 w-full max-w-7xl mx-auto my-2 flex items-center justify-between rounded-lg p-2 text-gray-300"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          onClick={copiarTexto}
          className={`${
            copiado
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded absolute top-2 right-2`}
        >
          {copiado ? "Copiado!" : "Copiar"}
        </button>
        {copiado && <p className="text-green-400 mt-2"></p>}
      </div>
    </>
  );
}
