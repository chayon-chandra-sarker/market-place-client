import React, { use } from "react";
import Container from "../Container/Container";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ productsPromiss }) => {
  const products = use(productsPromiss);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold LatoBold inline-block border-b-4 border-primary pb-2">
            All Jobs
          </h1>
          <p className="text-gray-600 mt-2 LatoRegular">
            Browse the latest job postings and opportunities
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;