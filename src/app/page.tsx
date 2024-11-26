import ImageCarousel from "@/components/molecules/Carousel";
import { productData } from "@/data/tempData";
import ProductCard from "@/components/atom/ProductCard";

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
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                url={product.url}
                image={product.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
