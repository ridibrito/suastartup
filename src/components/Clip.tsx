import React, { useState } from "react";

function Clip() {
  const [texto, setTexto] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={handleInputChange}
        className="bg-gray-800 rounded p-1.5"
      />
    </div>
  );
}

export default Clip;
