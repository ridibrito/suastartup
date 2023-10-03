import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-screen flex items-center justify-end h-20 bg-[#000016] p-12">
        <div className=" flex justify-between max-w-5xl gap-5 mx-auto">
          <p className="text-gray-600">
            Copyright © 2023, Todos os direitos reservados.
          </p>
          <Image src="/icone_dark.png" alt="icone" width="30" height="10" />
        </div>
      </div>
    </>
  );
}
