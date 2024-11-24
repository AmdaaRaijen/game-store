import Image from "next/image";
import React from "react";

interface Props {
  params: {
    game: string;
  };
}

export default function page({ params }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[300px] border-b-2 shadow-sm">
        <Image
          src="/banner/banner.png"
          alt="Xavier"
          fill
          className="object-cover"
          priority
        />
      </div>
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
            <h1 className="text-4xl font-light tracking-wider">
              {params.game}
            </h1>
            <p className="text-sm font-light tracking-wider">
              Fast, secure, and reliable.
            </p>
          </div>
        </div>
      </section>
      <section className="px-10 flex items-start justify-between gap-3">
        <div className="w-full sticky top-2 h-fit bg-zinc-200 rounded-md p-5 border border-zinc-500 shadow">
          <div className="prose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            ea qui tempora. Culpa fuga tempore et quis hic, sunt dolorem
            asperiores illo facere amet aut quibusdam commodi rerum. Dolor vero
            rem iure deserunt, ullam ea quo tempore! Distinctio ea possimus
            iusto necessitatibus animi suscipit eligendi, officia qui asperiores
            nostrum, esse modi accusamus a, magni expedita voluptas accusantium
            voluptates ut tempore porro dolorum.
          </div>
        </div>
        <div className="w-full min-h-[200vh] bg-zinc-200 rounded-md p-5 border border-zinc-500 shadow flex flex-col gap-5">
          <section>
            <h2 className="font-medium mb-2">1. Masukkan Data Akun</h2>
            <div className="flex items-center justify-start gap-5 text-sm">
              <div className="w-full">
                <p>ID</p>
                <input
                  type="text"
                  placeholder="Masukkan ID"
                  className="border border-zinc-500 rounded-md p-1 bg-zinc-100 w-full focus:outline-2 focus:outline-zinc-500"
                />
              </div>
              <div className="w-full">
                <p>Server</p>
                <input
                  type="text"
                  placeholder="Masukkan Server"
                  className="border border-zinc-500 rounded-md p-1 bg-zinc-100 w-full focus:outline-2 focus:outline-zinc-500"
                />
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-medium mb-2">2. Pilih Nominal</h2>
            <div className="grid grid-cols-3 gap-2">
              <div
                className="w-fit relative flex cursor-pointer rounded-xl border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100"
                role="radio"
                aria-checked="false"
                tabIndex={0}
              >
                <span className="flex flex-1 mr-4">
                  <span className="flex flex-col justify-between">
                    <span className="block text-xs font-semibold">
                      Weekly Diamond Pass
                    </span>
                    <div>
                      <span className="mt-1 flex items-center text-[11px] font-semibold">
                        Rp 28.499
                      </span>
                    </div>
                  </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                  <Image
                    alt="Mobile Legends - Weekly Diamond Pass"
                    fetchPriority="high"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="object-contain object-right"
                    sizes="80vh"
                    src="/icon/diamond.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="w-fit relative flex cursor-pointer rounded-xl border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100"
                role="radio"
                aria-checked="false"
                tabIndex={0}
              >
                <span className="flex flex-1 mr-4">
                  <span className="flex flex-col justify-between">
                    <span className="block text-xs font-semibold">
                      Weekly Diamond Pass
                    </span>
                    <div>
                      <span className="mt-1 flex items-center text-[11px] font-semibold">
                        Rp 28.499
                      </span>
                    </div>
                  </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                  <Image
                    alt="Mobile Legends - Weekly Diamond Pass"
                    fetchPriority="high"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="object-contain object-right"
                    sizes="80vh"
                    src="/icon/diamond.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="w-fit relative flex cursor-pointer rounded-xl border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100"
                role="radio"
                aria-checked="false"
                tabIndex={0}
              >
                <span className="flex flex-1 mr-4">
                  <span className="flex flex-col justify-between">
                    <span className="block text-xs font-semibold">
                      Weekly Diamond Pass
                    </span>
                    <div>
                      <span className="mt-1 flex items-center text-[11px] font-semibold">
                        Rp 28.499
                      </span>
                    </div>
                  </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                  <Image
                    alt="Mobile Legends - Weekly Diamond Pass"
                    fetchPriority="high"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="object-contain object-right"
                    sizes="80vh"
                    src="/icon/diamond.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="w-fit relative flex cursor-pointer rounded-xl border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100"
                role="radio"
                aria-checked="false"
                tabIndex={0}
              >
                <span className="flex flex-1 mr-4">
                  <span className="flex flex-col justify-between">
                    <span className="block text-xs font-semibold">
                      Weekly Diamond Pass
                    </span>
                    <div>
                      <span className="mt-1 flex items-center text-[11px] font-semibold">
                        Rp 28.499
                      </span>
                    </div>
                  </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                  <Image
                    alt="Mobile Legends - Weekly Diamond Pass"
                    fetchPriority="high"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="object-contain object-right"
                    sizes="80vh"
                    src="/icon/diamond.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="w-fit relative flex cursor-pointer rounded-xl border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100"
                role="radio"
                aria-checked="false"
                tabIndex={0}
              >
                <span className="flex flex-1 mr-4">
                  <span className="flex flex-col justify-between">
                    <span className="block text-xs font-semibold">
                      Weekly Diamond Pass
                    </span>
                    <div>
                      <span className="mt-1 flex items-center text-[11px] font-semibold">
                        Rp 28.499
                      </span>
                    </div>
                  </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                  <Image
                    alt="Mobile Legends - Weekly Diamond Pass"
                    fetchPriority="high"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="object-contain object-right"
                    sizes="80vh"
                    src="/icon/diamond.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="w-fit relative flex cursor-pointer rounded-xl border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100"
                role="radio"
                aria-checked="false"
                tabIndex={0}
              >
                <span className="flex flex-1 mr-4">
                  <span className="flex flex-col justify-between">
                    <span className="block text-xs font-semibold">
                      Weekly Diamond Pass
                    </span>
                    <div>
                      <span className="mt-1 flex items-center text-[11px] font-semibold">
                        Rp 28.499
                      </span>
                    </div>
                  </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                  <Image
                    alt="Mobile Legends - Weekly Diamond Pass"
                    fetchPriority="high"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="object-contain object-right"
                    sizes="80vh"
                    src="/icon/diamond.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="w-fit relative flex cursor-pointer rounded-xl border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100"
                role="radio"
                aria-checked="false"
                tabIndex={0}
              >
                <span className="flex flex-1 mr-4">
                  <span className="flex flex-col justify-between">
                    <span className="block text-xs font-semibold">
                      Weekly Diamond Pass
                    </span>
                    <div>
                      <span className="mt-1 flex items-center text-[11px] font-semibold">
                        Rp 28.499
                      </span>
                    </div>
                  </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                  <Image
                    alt="Mobile Legends - Weekly Diamond Pass"
                    fetchPriority="high"
                    width="300"
                    height="300"
                    decoding="async"
                    data-nimg="1"
                    className="object-contain object-right"
                    sizes="80vh"
                    src="/icon/diamond.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-medium mb-2">3. Pilih Pembayaran</h2>
            <div>
              <div className="flex items-center justify-start gap-5 text-sm">
                <div className="w-full">
                  <p>Metode Pembayaran</p>
                  <select className="border border-zinc-500 rounded-md p-1 bg-zinc-100 w-full">
                    <option value="gopay">Gopay</option>
                    <option value="ovo">Ovo</option>
                    <option value="dana">Dana</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
