import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/products/FilterSidebar";
import SortOptions from "../components/products/SortOptions";
import ProductGrid from "../components/products/ProductGrid";
import hero from "../../public/images/hero.jpg"
import hero1 from "../../public/images/hero1.jpg"
import hero2 from "../../public/images/hero2.jpg"
import hero3 from "../../public/images/hero3.jpg"
const Collection = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 5,
          name: "product 1",
          price: 100,
          images: [{ url: hero3, altText: "image" }],
        },
        {
          _id: 6,
          name: "product 2",
          price: 100,
          images: [{ url: hero2, altText: "image" }],
        },
        {
          _id: 7,
          name: "product 3",
          price: 100,
          images: [{ url: hero1, altText: "image" }],
        },
        {
          _id: 8,
          name: "product 4",
          price: 100,
          images: [{ url: hero, altText: "image" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row ">
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center w-full"
      >
        <FaFilter className="mr-2" /> Filters
      </button>
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4 ">
        <h2 className="text-2xl uppercase mb-4">all collection</h2>
        <SortOptions />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Collection;

