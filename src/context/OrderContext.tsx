"use client";
import { ProductDataType } from "@/types/Product";
import { createContext, ReactNode, useContext, useState } from "react";

export interface OrderContextType {
  orderState: ProductDataType | null;
  setOrderState: (value: ProductDataType) => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderState, setOrderState] = useState<ProductDataType | null>(null);

  return (
    <OrderContext.Provider value={{ orderState, setOrderState }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrderContext must be used within a OrderProvider");
  }

  return context;
};
