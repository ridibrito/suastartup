import { BiArrowBack } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";
import Clip from "@/components/Clip";

import Textarea from "@/components/textarea";

export default function Chatwoot() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#000016] via-[#001B47] to-[#003E77]">
        <div className="max-w-7xl mx-auto flex justify-between items-center content-center py-4 px-24">
          <Link href="/full">
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
          href="/full"
          className="hover:bg-gray-300 hover:text-gray-700 rounded p-1.5"
        >
          <BiArrowBack className="w-6 h-6" />
        </Link>
        <div className="max-w-3xl mx-auto flex justify-center ">
          <h1 className=" text-4xl">Chatwoot</h1>
        </div>
      </div>
      <div className="p-12 max-w-7xl mx-auto">
        <p>
          Seja bem vindo a instalação do Chatwoot, siga o passo a passo a abaixo
          detalhadamente:
        </p>
        <div className="mt-3">
          <p className="mt-2">
            Crie 1 subdominios em seu Claudflare e aponte para o IP da sua VPS.
          </p>
          <div className="mt-2">
            <span>Frontend : (Ex: chatwoot.seucliente.seudominio.com)</span>
            <Clip />
          </div>
        </div>
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

      <div className="px-12 pt-12 max-w-3xl mx-auto">
        <p>Com o terminal aberto, vamos iniciar:</p>
      </div>
      <div className="px-12 max-w-3xl mx-auto">
        <p>Instalação na minha VPS:</p>
      </div>
      <div>
        <Textarea
          rows={3}
          textArea={`sudo apt upgrade -y && sudo apt update && sudo apt install -y git && git clone https://github.com/Sua-Startup/SetupInstall.git && cd SetupInstall && sudo chmod +x install.sh && ./install.sh
`}
        />
      </div>
    </>
  );
}
