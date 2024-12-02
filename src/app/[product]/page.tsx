import Banner from "@/components/atom/Banner";
import ProductTitle from "@/components/molecules/ProductTitle";
import OrderSidebar from "@/components/organism/ProductTutorial";
import ProductItems from "@/components/organism/ProductItems";

interface Props {
  params: {
    product: string;
  };
}

export default function page({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <ProductTitle />
      <section className="px-10 flex items-start justify-between gap-3 mb-5">
        <OrderSidebar />
        <ProductItems />
      </section>
    </div>
  );
}
