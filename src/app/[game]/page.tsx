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
        <div className="w-full min-h-[200vh] bg-zinc-200 rounded-md p-5 border border-zinc-500 shadow">
          <div className="prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
            odit, molestiae nemo, ipsa porro provident debitis dolore quia modi
            similique possimus nihil architecto perspiciatis cum sequi, amet
            quidem consequuntur! Perferendis ex quia saepe unde voluptatem
            corrupti, obcaecati, iste error, iusto in rem nesciunt nam a quos
            facere tempore eos. Ut illo itaque nulla iste architecto dolor,
            neque dolorum. Delectus magni sapiente minus laboriosam est,
            blanditiis optio consequuntur voluptates omnis.
          </div>
        </div>
      </section>
    </div>
  );
}
