import { BiArrowBack } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";
import Clip from "@/components/Clip";
import Block from "@/components/block";

import Textarea from "@/components/textarea";

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
          <div className="flex items-center gap-3">
            <Image
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/user.png"
              alt="Bordered avatar"
              width="100"
              height="50"
            />
            <p className="hidden text-xs">Ricardo.brasiliadf@hotmail.com</p>
          </div>
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
          <h1 className=" text-4xl">Whathicket</h1>
        </div>
      </div>
      <div className="p-12 max-w-7xl mx-auto">
        <p>
          Seja bem vindo a instalação do Whaticket, siga o passo a passo a
          abaixo detalhadamente:
        </p>
        <div className="mt-3">
          <p className="mt-2">
            Crie 2 subdominios em seu Claudflare e aponte para o IP da sua VPS.
          </p>
          <div className="mt-2">
            <span>Frontend : </span>
            <Clip />
            <span>Backend : </span>
            <Clip />
            <span>Senha servidor : </span>
          </div>
        </div>
        <Clip />
      </div>
      <div className="m-12 mt-0 max-w-3xl mx-auto">
        <Link
          target="_blank"
          className="bg-gray-500 rounded p-1.5 "
          href="https://dnschecker.org/"
        >
          dnschecker.org
        </Link>
      </div>
      <hr />
      <div className="p-12 max-w-3xl mx-auto">
        <p>Com o terminal aberto, vamos iniciar:</p>
      </div>
      <div>
        <Block
          textoInicial={`sudo apt -y update && apt -y upgrade
`}
        />
        <Block
          textoInicial={`sudo apt install -y git
`}
        />
        <Block
          textoInicial={`git clone https://github.com/Sua-Startup/instalador-whaticket.git
`}
        />
        <div className="p-12 max-w-3xl mx-auto">
          <p>Vamos torna-lo executável</p>
        </div>
        <Block
          textoInicial={`sudo chmod +x ./instalador-whaticket/whaticket
`}
        />
        <div className="p-12 max-w-3xl mx-auto">
          <p>Navegue até a pasta e rode o script</p>
        </div>
        <Block
          textoInicial={`cd ./instalador-whaticket

`}
        />
        <Block
          textoInicial={`sudo ./whaticket
`}
        />
      </div>
    </>
  );
}
