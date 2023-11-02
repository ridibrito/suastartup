import Image from "next/image";
import { Inter } from "next/font/google";

import {
  AiOutlineFileText,
  AiOutlineWhatsApp,
  AiOutlineDatabase,
  AiOutlineTool,
  AiOutlineFunnelPlot,
} from "react-icons/ai";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <div className="w-full h-60 bg-gradient-to-r from-[#000016] via-[#001B47] to-[#003E77]">
        <div className="max-w-7xl mx-auto flex justify-between items-center content-center pt-10 px-24">
          <Link href="/">
            <Image
              src="/logo_dark.png"
              alt="capaSuaStartup"
              width="120"
              height="80"
            />
          </Link>
        </div>
        <div className="max-w-3xl text-gray-300 mx-auto flex justify-center text-4xl mt-16">
          <h1>Documentações</h1>
        </div>
        <div className="max-w-5xl mx-auto mt-6">
          <form>
            <label className="mb-2 text-sm font-medium text-gray-500 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-4 pl-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar projetos"
              />
            </div>
          </form>
        </div>
        <div className="sm:flex flex-col-2 gap-12 max-w-5xl mx-auto p-12  space-y-5 sm:space-y-0">
          <div>
            <div>
              <h2 className="border-b flex items-center gap-3">
                <AiOutlineDatabase />
                SERVIDORES
              </h2>
            </div>
            <ul className="mt-3">
              <Link href="servidores/Contabo">
                <li className="flex items-center gap-2 hover:text-blue-500">
                  <AiOutlineFileText />
                  Contabo
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <div>
              <h2 className="border-b flex items-center gap-3">
                <AiOutlineDatabase />
                DOMÍNIO
              </h2>
            </div>
            <ul className="mt-3">
              <Link
                target="_blank"
                href="https://hostinger.com.br?REFERRALCODE=1RICARDODEB51"
              >
                <li className="flex items-center gap-2 hover:text-blue-500">
                  <AiOutlineFileText />
                  Hostinger
                </li>
              </Link>
              <Link target="_blank" href="https://registro.br/">
                <li className="flex items-center gap-2 hover:text-blue-500">
                  <AiOutlineFileText />
                  Registro Br
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <div>
              <h2 className="border-b flex items-center gap-3">
                <AiOutlineTool />
                FERRAMENTAS
              </h2>
            </div>
            <ul className="mt-3">
              <Link href="ferramentas/bitivise">
                <li className="flex items-center gap-2 hover:text-blue-500">
                  <AiOutlineFileText />
                  Bitivise
                </li>
              </Link>
              <Link href="ferramentas/vscode">
                <li className="flex items-center gap-2 hover:text-blue-500">
                  <AiOutlineFileText />
                  VS Code
                </li>
              </Link>
              <Link href="ferramentas/cloudflare">
                <li className="flex items-center gap-2 hover:text-blue-500">
                  <AiOutlineFileText />
                  Cloudflare
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <div>
              <h2 className="border-b flex items-center gap-3">
                <AiOutlineTool />
                Help
              </h2>
            </div>
            <ul className="mt-3">
              <Link
                target="_blank"
                href="https://drive.google.com/drive/folders/14DTH1bS4PGPuYN5T6baph4XWQ97ath1U?usp=sharing"
              >
                <li className="flex items-center gap-2 hover:text-blue-500">
                  <AiOutlineFileText />
                  Drive
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <div className="sm:flex flex-col-2 gap-12 max-w-5xl mx-auto p-12  pt-0 space-y-5 sm:space-y-0">
            <div>
              <div>
                <h2 className="border-b flex items-center gap-3">
                  <AiOutlineWhatsApp />
                  WHATSAPP
                </h2>
              </div>

              <ul className="mt-3">
                <Link href="projetos/whaticket">
                  <li className="flex items-center gap-2 hover:text-blue-500">
                    <AiOutlineFileText />
                    Whaticket
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
