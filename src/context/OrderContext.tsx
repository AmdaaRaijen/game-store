"use client";
import { ProductDataType } from "@/types/Product";
import { createContext, ReactNode, useContext, useState } from "react";

export interface AccountType {
  [key: string]: string | null;
}

export interface PaymentType {
  code: string;
  name: string;
}

export interface OrderContextType {
  product: ProductDataType | null;
  setProduct: (value: ProductDataType) => void;
  account: AccountType | null;
  setAccount: (key: string, value: string) => void;
  payment: PaymentType | null;
  setPayment: (value: PaymentType) => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<ProductDataType | null>(null);
  const [account, setAccountState] = useState<AccountType>({});
  const [payment, setPayment] = useState<PaymentType | null>(null);

  const setAccount = (key: string, value: string) => {
    setAccountState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <OrderContext.Provider
      value={{
        product,
        setProduct,
        account,
        setAccount,
        payment,
        setPayment,
      }}
    >
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
