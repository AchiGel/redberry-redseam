import type { ProductsResponse } from "../types/types";
import GridCard from "./GridCard";

const ProductsGrid = ({ products }: { products: ProductsResponse }) => {
  return (
    <div className="gap-x-6 gap-y-12 grid grid-cols-4 mb-[58px]">
      {products.data.map((item) => (
        <GridCard
          key={item.id}
          image={item.cover_image}
          title={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
