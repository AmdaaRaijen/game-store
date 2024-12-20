"use client";

import React, { useRef, useState } from "react";
import ItemCard from "../atom/ItemCard";
import { paymentMethodItems, paymentMethodPreview } from "@/data/tempData";
import PaymentMethodContainer from "../molecules/PaymentMethodContainer";
import { ProductDataType, ProductType } from "@/types/Product";
import { useOrderContext } from "@/context/OrderContext";
import AccountInput from "../molecules/AccountInput";

async function handleGetItem(): Promise<ProductType> {
  const res = await fetch("http://localhost:5000/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function ProductItems() {
  const [productItemData, setProductItemData] = useState<
    ProductDataType[] | null
  >(null);
  const paymentRef = useRef<HTMLDivElement>(null);

  const { setProduct, product } = useOrderContext();

  const handleCardClick = (orderItem: ProductDataType) => {
    setProduct(orderItem);

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

  React.useEffect(() => {
    handleGetItem().then((data) => {
      setProductItemData(data.data);
    });
  }, []);

  return (
    <div className="w-full min-h-fit bg-zinc-200 rounded-md p-5 border border-zinc-500 shadow flex flex-col gap-5">
      <AccountInput />
      <section>
        <h2 className="font-medium mb-2">2. Pilih Nominal</h2>
        <div className="grid grid-cols-3 gap-2">
          {productItemData === null ? (
            <div>Item Tidak Tersedia</div>
          ) : (
            productItemData.map((item: ProductDataType) => (
              <ItemCard
                key={item.code}
                handleCardClick={handleCardClick}
                selectedItemKey={product?.code}
                item={item}
              />
            ))
          )}
        </div>
      </section>
      <section>
        <h2 className="font-medium mb-2">3. Pilih Pembayaran</h2>
        <PaymentMethodContainer
          type="E Wallet"
          ref={paymentRef}
          paymentMethodItems={paymentMethodItems}
          paymentMethodPreview={paymentMethodPreview}
        />
      </section>
    </div>
  );
}
