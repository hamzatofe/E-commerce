import { Link } from "react-router-dom";
import hero from "../../../public/images/hero.jpg"
import hero1 from "../../../public/images/hero1.jpg"
import hero2 from "../../../public/images/hero2.jpg"
import hero3 from "../../../public/images/hero3.jpg"
  const similarProducts = [
    {
      _id: 1,
      name: "product 1",
      price: 100,
      images: [{ url: hero3, altText: "image" }],
    },
    {
      _id: 2,
      name: "product 2",
      price: 100,
      images: [{ url: hero2, altText: "image" }],
    },
    {
      _id: 3,
      name: "product 3",
      price: 100,
      images: [{ url: hero1, altText: "image" }],
    },
    {
      _id: 4,
      name: "product 4",
      price: 100,
      images: [{ url: hero, altText: "image" }],
    },
  ];
const ProductGrid = ({ products  }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {similarProducts.map((product, index) => {
        return (
          <Link key={index} to={`/product/${product._id}`} className=" mx-2  ">
            <div className="bg-white p-3 rounded-lg ">
              <div className="w-[full] h-60 mb-4 flex justify-center">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.name}
                  className="w-[full] h-full object-cover  rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-sm nb-2">{product.name}</h3>
                <p className="text-gray-500 font-medium text-sm tracking-tighter">
                  $ {product.price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
