import React from "react";
import OrderSummary from "../molecules/OrderSummary";

export default function OrderSidebar() {
  return (
    <div className="w-full sticky top-2 h-fit flex flex-col gap-3">
      <div className=" bg-zinc-200 rounded-md p-5 border border-zinc-500 shadow prose">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ea
        qui tempora. Culpa fuga tempore et quis hic, sunt dolorem asperiores
        illo facere amet aut quibusdam commodi rerum. Dolor vero rem iure
        deserunt, ullam ea quo tempore! Distinctio ea possimus iusto
        necessitatibus animi suscipit eligendi, officia qui asperiores nostrum,
        esse modi accusamus a, magni expedita voluptas accusantium voluptates ut
        tempore porro dolorum.
      </div>
      <OrderSummary />
    </div>
  );
}
