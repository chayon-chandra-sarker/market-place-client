import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { _id, title, postedBy, image, category, budget } = product;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Image */}
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Card Body */}
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold text-gray-800 LatoSemibold">
          {postedBy}
        </h2>
        <p className="text-gray-600 mt-1 LatoRegular">{title}</p>

        {/* Optional extra info */}
        {category && (
          <span className="badge badge-outline badge-primary mt-2">
            {category}
          </span>
        )}
        {budget && (
          <span className="text-green-600 font-semibold mt-1">
            ${budget}
          </span>
        )}

        {/* Button */}
        <div className="mt-4">
          <Link
            to={`/job-details/${_id}`}
            className="btn btn-primary btn-outline px-6 py-2 LatoRegular text-lg"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;