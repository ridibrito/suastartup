import { BiArrowBack } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";

export default function Vultr() {
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
      <div className="p-12 flex max-w-7xl mx-auto">
        <Link
          href="/"
          className="hover:bg-gray-300 hover:text-gray-700 rounded p-1.5"
        >
          <BiArrowBack className="w-6 h-6" />
        </Link>

        <h1 className="max-w-3xl mx-auto flex justify-center text-4xl">
          Vultr
        </h1>
      </div>
      <div className="p-12 max-w-7xl mx-auto">
        {" "}
        <p>
          Se você está procurando o servidor em nuvem com a melhor relação
          preço-desempenho, precisa de energia não compartilhada para suas
          cargas de trabalho de produção ou quer aproveitar a arquitetura Arm64,
          temos uma opção para você.
        </p>
        <div className="mt-5 underline">
          <Link
            className="flex items-center gap-2"
            href="https://www.vultr.com/?ref=9545089"
          >
            Ganhe U$ 100 para testar a Vultr.
          </Link>
        </div>
      </div>
    </>
  );
}
