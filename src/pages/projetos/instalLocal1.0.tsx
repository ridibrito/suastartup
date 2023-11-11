import { BiArrowBack } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";
import Clip from "@/components/Clip";
import Block from "@/components/block";

export default function amazon() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#000016] via-[#001B47] to-[#003E77]">
        <div className="max-w-7xl mx-auto flex justify-between items-center content-center py-4 px-24">
          <Link href="/">
            <Image
              src="/logo_dark.png"
              alt="capaSuaStartup"
              width="120"
              height="80"
            />
          </Link>
        </div>
      </div>
      <div className="p-12 flex border-b ">
        <Link
          href="/"
          className="hover:bg-gray-300 hover:text-gray-700 rounded p-1.5"
        >
          <BiArrowBack className="w-6 h-6" />
        </Link>
        <div className="max-w-3xl mx-auto flex justify-center ">
          <h1 className=" text-4xl">Whathicket Localhost</h1>
        </div>
      </div>
      <div className="p-12 max-w-7xl mx-auto">
        <p>
          Seja bem vindo a instalação do Whaticket Localhost, siga o passo a
          passo a abaixo detalhadamente:
        </p>
      </div>

      <hr />
      <div className="px-12 pb-4 pt-8 max-w-3xl mx-auto">
        <p>Com o terminal aberto, vamos iniciar:</p>
        <p>No VS code digite Ctrl J</p>
      </div>
      <div>
        <Block
          textoInicial={`git clone https://github.com/Sua-Startup/whaticket.git
`}
        />
        <Block
          textoInicial={`cd whaticket
`}
        />
        <Block
          textoInicial={`cd backend
`}
        />
        <Block
          textoInicial={`npm install
`}
        />

        <Block
          textoInicial={`npm run build
`}
        />
        <p className="px-12 max-w-3xl mx-auto">Criar pasta .env</p>
        <Block
          textoInicial={`nano .env
`}
        />
        <p className="px-12 max-w-3xl mx-auto">Entre na pasta .env</p>
        <Block
          textoInicial={`
          NODE_ENV=DEVELOPMENT      #it helps on debugging
          BACKEND_URL=http://localhost
          FRONTEND_URL=https://localhost:3000
          PROXY_PORT=8080
          PORT=8080
          
          DB_HOST=localhost                 #DB host IP, usually localhost
          DB_DIALECT=mysql
          DB_USER=root
          DB_PASS=
          DB_NAME=whaticket
          
          JWT_SECRET=3123123213123
          JWT_REFRESH_SECRET=75756756756
`}
        />
        <div className="px-12 max-w-3xl mx-auto">
          <p>No navegador acesse</p>
        </div>
        <Block
          textoInicial={`localhost
`}
        />
        <div className="px-12 max-w-3xl mx-auto">
          <p>Crie um banco de dados</p>
        </div>
        <Block
          textoInicial={`npx sequelize db:migrate
`}
        />

        <Block
          textoInicial={`npx sequelize db:seed:all

`}
        />
        <p className="px-12 max-w-3xl mx-auto">Inicie o backend</p>

        <Block
          textoInicial={`npm start
`}
        />
        <p className="px-12 max-w-3xl mx-auto">Abra outro terminal</p>
        <Block
          textoInicial={`cd whaticket
`}
        />

        <Block
          textoInicial={`cd frontend
`}
        />
        <p className="px-12 max-w-3xl mx-auto">Criar pasta .env</p>
        <Block
          textoInicial={`nano .env
`}
        />
        <p className="px-12 max-w-3xl mx-auto">Entre na pasta .env</p>
        <Block
          textoInicial={`REACT_APP_BACKEND_URL = http://localhost:8080/
`}
        />
        <Block
          textoInicial={`npm install react-scripts --save
`}
        />

        <Block
          textoInicial={`npm start
`}
        />
        <p className="px-12 max-w-3xl mx-auto">Login:</p>

        <Block
          textoInicial={`admin@whaticket.com
`}
        />
        <p className="px-12 max-w-3xl mx-auto">Senha:</p>
        <Block
          textoInicial={`admin
`}
        />
      </div>
    </>
  );
}
