import Banner from "@/components/atom/Banner";
import ProductTitle from "@/components/molecules/ProductTitle";
import OrderSection from "@/components/organism/OrderSection";

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
      <OrderSection />
    </div>
  );
}
