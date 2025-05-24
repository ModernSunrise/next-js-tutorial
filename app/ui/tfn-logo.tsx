import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";

export default function TFNLogo() {
  return (
    <div
      className={`${montserrat.className} flex flex-row items-center leading-none text-white md:gap-4`}
    >
      <Image
        src="/tfn_icon.png"
        alt="Logo"
        width={100}
        height={100}
        className="h-16 w-16 rounded-full bg-white p-1"
      />
      <p className="text-[44px]">The Fantasy Network</p>
    </div>
  );
}
