import React from "react";
import ProductCard from "../atom/ProductCard";
import { ProductCategory } from "@/types/ProductCategory";

const getProductCategories = async (): Promise<ProductCategory[]> => {
  const response = await fetch("http://localhost:5000/categories");

  const data: ProductCategory[] = await response.json();
  return data;
};

export default async function ListProductCategory() {
  const ProductCategory = await getProductCategories();

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-3 w-full">
      {ProductCategory.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          url={product.slug}
          image={product.icon}
        />
      ))}
    </div>
  );
}
