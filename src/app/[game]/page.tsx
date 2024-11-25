"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  params: {
    game: string;
  };
}

const items: Array<{
  key: number;
  name: string;
  price: string;
  icon: string;
}> = [
  {
    key: 1,
    name: "Weekly Diamond Pass",
    price: "Rp 28.499",
    icon: "/icon/diamond.webp",
  },
  {
    key: 2,
    name: "Weekly Diamond Pass",
    price: "Rp 28.499",
    icon: "/icon/diamond.webp",
  },
  {
    key: 3,
    name: "Weekly Diamond Pass",
    price: "Rp 28.499",
    icon: "/icon/diamond.webp",
  },
  {
    key: 4,
    name: "Weekly Diamond Pass",
    price: "Rp 28.499",
    icon: "/icon/diamond.webp",
  },
  {
    key: 5,
    name: "Weekly Diamond Pass",
    price: "Rp 28.499",
    icon: "/icon/diamond.webp",
  },
  {
    key: 6,
    name: "Weekly Diamond Pass",
    price: "Rp 28.499",
    icon: "/icon/diamond.webp",
  },
];

export default function page({ params }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const paymentRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (itemKey: number) => {
    setSelectedItem(itemKey);

    if (paymentRef.current) {
      const rect = paymentRef.current.getBoundingClientRect();

      const isNotInViewport = rect.bottom - 35 > window.innerHeight;

      if (isNotInViewport) {
        const elementPosition = rect.top;
        const offsetPosition =
          elementPosition +
          window.scrollY -
          window.innerHeight +
          paymentRef.current.offsetHeight +
          32;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

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
              Mobile Legends
            </h1>
            <p className="text-sm font-light tracking-wider">
              Fast, secure, and reliable.
            </p>
          </div>
        </div>
      </section>
      <section className="px-10 flex items-start justify-between gap-3 mb-5">
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
        <div className="w-full min-h-fit bg-zinc-200 rounded-md p-5 border border-zinc-500 shadow flex flex-col gap-5">
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
              {items.map((item) => (
                <div
                  key={item.key}
                  className={`w-fit relative flex cursor-pointer rounded-md border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100
                  ${
                    item.key === selectedItem
                      ? "shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow duration-50"
                      : "border-zinc-300 shadow-none transition-shadow duration-50"
                  }`}
                  role="radio"
                  aria-checked="false"
                  tabIndex={0}
                  onClick={() => handleCardClick(item.key)}
                >
                  <span className="flex flex-1 mr-4">
                    <span className="flex flex-col justify-between">
                      <span className="block text-xs font-semibold">
                        {item.name}
                      </span>
                      <div>
                        <span className="mt-1 flex items-center text-[11px] font-semibold">
                          {item.price}
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
                      src={item.icon}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="font-medium mb-2">3. Pilih Pembayaran</h2>
            <div>
              <div
                className="flex items-center justify-start gap-5 text-sm"
                ref={paymentRef}
              >
                <div className="w-full">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full rounded-t-md text-card-foreground disabled:opacity-75 bg-zinc-300 p-2 text-start flex items-center justify-between"
                  >
                    E-Wallet
                    <ExpandMoreIcon
                      className={`text-zinc-600 transform transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 transform ${
                      isExpanded ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="w-full p-4 bg-zinc-400 grid grid-cols-4 gap-4 text-zinc-50">
                      <div className="w-36 h-16 px-4 py-2 bg-zinc-500 rounded-md flex flex-col items-start justify-center gap-2  cursor-pointer hover:bg-zinc-500/85 ease-in-out duration-200 ">
                        <span>Gopay</span>
                        <i className="text-xs font-medium">Rp 28.499</i>
                      </div>
                      <div className="w-36 h-16 px-4 py-2 bg-zinc-500 rounded-md flex flex-col items-start justify-center gap-2  cursor-pointer hover:bg-zinc-500/85 ease-in-out duration-200 ">
                        <span>Ovo</span>
                        <i className="text-xs font-medium">Rp 28.499</i>
                      </div>
                      <div className="w-36 h-16 px-4 py-2 bg-zinc-500 rounded-md flex flex-col items-start justify-center gap-2  cursor-pointer hover:bg-zinc-500/85 ease-in-out duration-200 ">
                        <span>Dana</span>
                        <i className="text-xs font-medium">Rp 28.499</i>
                      </div>
                      <div className="w-36 h-16 px-4 py-2 bg-zinc-500 rounded-md flex flex-col items-start justify-center gap-2  cursor-pointer hover:bg-zinc-500/85 ease-in-out duration-200 ">
                        <span>Shopee Pay</span>
                        <i className="text-xs font-medium">Rp 28.499</i>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full rounded-b-md px-4 py-3 bg-zinc-500 transition-all duration-300`}
                  >
                    <div className="flex justify-end gap-2">
                      {/* Replace with actual placeholder images since we can't load external images */}
                      <Image
                        src="/icon/ovo.webp"
                        alt="Ovo"
                        className="w-5"
                        width={980}
                        height={980}
                      />
                      <Image
                        src="/icon/dana.webp"
                        alt="Dana"
                        className="w-5"
                        width={980}
                        height={980}
                      />
                      <Image
                        src="/icon/gopay.webp"
                        alt="Gopay"
                        className="w-5"
                        width={980}
                        height={980}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
