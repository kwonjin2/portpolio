import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-white">
      <div className="w-[139px] h-[43px] relative">
        <Image src="/logo_nexon.png" alt="logo_nexon" width={139} height={43} />
      </div>
    </header>
  );
}
