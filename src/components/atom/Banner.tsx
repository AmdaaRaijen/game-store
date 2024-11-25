import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[300px] border-b-2 shadow-sm">
      <Image
        src="/banner/banner.png"
        alt="Xavier"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
