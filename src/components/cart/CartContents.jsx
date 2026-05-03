import { RiDeleteBin3Line } from "react-icons/ri";
import image1 from "../../../public/images/image1.jpg"
import image3 from "../../../public/images/image3.jpg"
const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 15,
      image: image1,
    },
    {
      productId: 1,
      name: "T-shirt",
      size: "L",
      color: "White",
      quantity: 1,
      price: 15,
      image: image3,
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className=" flex ">
          <div className="flex border-b border-gray-300 p-1 gap-1 flex-wrap">
            <img
              className=" w-20 h-20  rounded shadow-lg hover:scale-105 transition hover:rotate-3"
              src={product.image}
              alt={product.name}
            />
            <div>
              <h3 className="text-white"> {product.name} </h3>
              <p className="text-white">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border border-gray-300 rounded px-3 py-0 text-xl font-medium hover:shadow-sm hover:shadow-black text-white hover:bg-gray-900 transition">
                  -
                </button>
                <span className="mx-4 text-white">{product.quantity}</span>
                <button className="border border-gray-300 rounded px-2 text-xl  font-medium hover:shadow-sm hover:shadow-black text-white hover:bg-gray-900 transition">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="ml-5 ">
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-4 w-5 text-white hover:rotate-6 hover:scale-105 hover:text-red-700 transition" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
