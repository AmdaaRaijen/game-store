import ImageCarousel from "@/components/organism/Carousel";

const images = [
  "https://picsum.photos/1200/600.webp?random=1",
  "https://picsum.photos/1200/600.webp?random=2",
  "https://picsum.photos/1200/600.webp?random=3",
  "https://picsum.photos/1200/600.webp?random=4",
];

export default function Home() {
  return (
    <div className="">
      <main className="w-full">
        <section className="flex items-center justify-center flex-col h-[80vh] w-full gap-10 p-20">
          <div className="text-center">
            <h1 className="font-light text-4xl tracking-wider">
              Amda Game Store
            </h1>
            <p className="font-light text-sm tracking-wider">
              Fast, secure, and reliable.
            </p>
          </div>
          <ImageCarousel images={images} />
        </section>
        <section className="flex items-center justify-center px-36 flex-col gap-10 py-10">
          <div className="h-[1px] w-full bg-zinc-300 shadow-sm"></div>
          <div className="ml-4">
            <h2 className="font-light text-4xl tracking-wider">Game List</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-3 w-full">
            <div className="relative w-full md:min-w-60 md:w-full h-36 md:h-64 overflow-hidden rounded-lg group game-card shadow-inner shadow-zinc-500 ">
              <div
                className="absolute inset-0 bg-cover md:bg-cover bg-no-repeat bg-center transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100 -z-10 "
                style={{
                  backgroundImage: `url("/xavier.jpg")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-zinc-500 opacity-15" />
              <div className="absolute bottom-0 left-0 right-0 px-1 py-2 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm">
                <h3 className="text-white text-[11px] md:text-xl font-normal truncate">
                  Mobile Legends
                </h3>
              </div>
            </div>
            <div className="relative w-full md:min-w-60 md:w-full h-36 md:h-64 overflow-hidden rounded-lg group game-card shadow-inner shadow-zinc-500 ">
              <div
                className="absolute inset-0 bg-cover md:bg-cover bg-no-repeat bg-center transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100 -z-10 "
                style={{
                  backgroundImage: `url("/xavier.jpg")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-zinc-500 opacity-15" />
              <div className="absolute bottom-0 left-0 right-0 px-1 py-2 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm">
                <h3 className="text-white text-[11px] md:text-xl font-normal truncate">
                  Mobile Legends
                </h3>
              </div>
            </div>
            <div className="relative w-full md:min-w-60 md:w-full h-36 md:h-64 overflow-hidden rounded-lg group game-card shadow-inner shadow-zinc-500 ">
              <div
                className="absolute inset-0 bg-cover md:bg-cover bg-no-repeat bg-center transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100 -z-10 "
                style={{
                  backgroundImage: `url("/xavier.jpg")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-zinc-500 opacity-15" />
              <div className="absolute bottom-0 left-0 right-0 px-1 py-2 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm">
                <h3 className="text-white text-[11px] md:text-xl font-normal truncate">
                  Mobile Legends
                </h3>
              </div>
            </div>
            <div className="relative w-full md:min-w-60 md:w-full h-36 md:h-64 overflow-hidden rounded-lg group game-card shadow-inner shadow-zinc-500 ">
              <div
                className="absolute inset-0 bg-cover md:bg-cover bg-no-repeat bg-center transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100 -z-10 "
                style={{
                  backgroundImage: `url("/xavier.jpg")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-zinc-500 opacity-15" />
              <div className="absolute bottom-0 left-0 right-0 px-1 py-2 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm">
                <h3 className="text-white text-[11px] md:text-xl font-normal truncate">
                  Mobile Legends
                </h3>
              </div>
            </div>
            <div className="relative w-full md:min-w-60 md:w-full h-36 md:h-64 overflow-hidden rounded-lg group game-card shadow-inner shadow-zinc-500 ">
              <div
                className="absolute inset-0 bg-cover md:bg-cover bg-no-repeat bg-center transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100 -z-10 "
                style={{
                  backgroundImage: `url("/xavier.jpg")`,
                }}
              ></div>
              <div className="absolute inset-0 bg-zinc-500 opacity-15" />
              <div className="absolute bottom-0 left-0 right-0 px-1 py-2 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm">
                <h3 className="text-white text-[11px] md:text-xl font-normal truncate">
                  Mobile Legends
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
