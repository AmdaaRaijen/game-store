import React from "react";
import Input from "../atom/Input";
import { useOrderContext } from "@/context/OrderContext";

export default function AccountInput() {
  const { setAccount, account } = useOrderContext();

  return (
    <section>
      <h2 className="font-medium mb-2">1. Masukkan Data Akun</h2>
      <div className="flex items-center justify-start gap-5 text-sm">
        <Input
          label="ID"
          placeholder="Masukkan ID"
          type="text"
          value={account?.id || ""}
          onChange={(e) => setAccount("id", e.target.value)}
        />
        <Input
          label="Server"
          placeholder="Masukkan Server"
          value={account?.server || ""}
          onChange={(e) => setAccount("server", e.target.value)}
        />
      </div>
    </section>
  );
}
