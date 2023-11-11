import React, { useState } from "react";

interface CopiarParaAreaDeTransferenciaProps {
  textoInicial: string;
  rows?: number;
}

function CopiarParaAreaDeTransferencia({
  textoInicial,
}: CopiarParaAreaDeTransferenciaProps) {
  const [texto, setTexto] = useState<string>(textoInicial);
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
    <div className="bg-gray-800 max-w-3xl mx-auto my-2 flex items-center justify-between rounded-lg p-2 text-gray-300">
      <pre className="mb-4">
        <code className="block items-center pt-2 pl-2">{textoInicial}</code>
      </pre>
      <button
        onClick={copiarTexto}
        className={`bg-${copiado ? "green-500" : "blue-500"} hover:bg-${
          copiado ? "green-600" : "blue-600"
        } text-white px-4 py-2 rounded`}
      >
        {copiado ? "Copiado!" : "Copiar!"}
      </button>
    </div>
  );
}

export default CopiarParaAreaDeTransferencia;
