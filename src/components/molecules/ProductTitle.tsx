import Image from "next/image";

export default function ProductTitle() {
  return (
    <section className="px-10 w-full">
      <div className="flex p-5 border border-zinc-500 shadow bg-zinc-300/80 backdrop-blur-sm relative bottom-2 w-full rounded-md">
        <div className="w-1/6">
          <div className="absolute border rotate-1 border-zinc-400 bg-zinc-200/50 backdrop-blur-sm w-36 h-52 rounded-md bottom-5 left-10 shadow-sm">
            <Image
              src="/xavier.jpg"
              alt="Xavier"
              fill
              className="object-cover rounded-md rotate-6 shadow-md"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-light tracking-wider">Mobile Legends</h1>
          <p className="text-sm font-light tracking-wider">
            Fast, secure, and reliable.
          </p>
        </div>
      </div>
    </section>
  );
}
