import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('search term:', searchTerm)
    setIsOpen(false)
  }
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-20 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative w-full flex justify-center items-center">
          <input
            className="focus:outline-none pl-2 px-4 py-1 rounded  bg-gray-200 placeholder:text-gray-400 w-1/2"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <HiMagnifyingGlass className="absolute top-2 -translate-x-7 text-gray-600 hover:text-gray-800 transition duration-200" />
          </button>
          <button type="button" onClick={handleSearchToggle} className="absolute right-2 text-lg text-gray-500 hover:text-red-600 hover:rotate-180 transition duration-300"><HiMiniXMark /></button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="text-gray-600 hover:text-gray-800 scale-100 hover:scale-110 transition duration-200" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
