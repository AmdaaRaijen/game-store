import React from "react";
import OrderSidebar from "./OrderSidebar";
import ProductItems from "./ProductItems";
import { OrderProvider } from "@/app/context/OrderContext";

export default function OrderSection() {
  return (
    <OrderProvider>
      <section className="px-10 flex items-start justify-between gap-3 mb-5">
        <OrderSidebar />
        <ProductItems />
      </section>
    </OrderProvider>
  );
}
