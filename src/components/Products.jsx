import Product from "./Product";
import { products } from "../utils/products";

export default function Products() {
  return (
    <main className="products mb-8 mt-24">
      <p className="text-sm text-custom-btn-gray mb-1">
        Popular item in the market
      </p>
      <h1 className="oswald text-5xl mb-12">
        Trending{" "}
        <span className="underline underline-offset-4 decoration-custom-blue">Product</span>
      </h1>
      <div className="flex flex-wrap gap-4 justify-center items-start">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
