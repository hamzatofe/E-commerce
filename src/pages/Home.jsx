import Hero from "../components/layout/Hero";
import FeaturesSection from "../components/products/FeaturesSection";
import FeautredCollection from "../components/products/FeautredCollection";
import Gender from "../components/products/Gender";
import NewArrivals from "../components/products/NewArrivals";
import ProductDetails from "../components/products/ProductDetails";
import ProductGrid from "../components/products/ProductGrid";

const placeholderProducts = [
  {
    _id: 5,
    name: "product 1",
    price: 100,
    images: [{ url: "/images/hero3.jpg", altText: "image" }],
  },
  {
    _id: 6,
    name: "product 2",
    price: 100,
    images: [{ url: "/images/hero2.jpg", altText: "image" }],
  },
  {
    _id: 7,
    name: "product 3",
    price: 100,
    images: [{ url: "/images/hero1.jpg", altText: "image" }],
  },
  {
    _id: 8,
    name: "product 4",
    price: 100,
    images: [{ url: "/images/hero.jpg", altText: "image" }],
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Gender />
      <NewArrivals />

      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto mt-6">
        <h2 className="text-2xl text-center font-bold mb-4">Top Wears for Women</h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeautredCollection />
      <FeaturesSection />
    </>
  );
};

export default Home;

