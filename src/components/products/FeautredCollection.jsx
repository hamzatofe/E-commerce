import { Link } from "react-router-dom";
import im6 from "../../../public/images/6.jpg"
const FeautredCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex  lg:flex-row items-center bg-green-50 rounded-3xl">
        <div className="lg:w-full flex flex-wrap items-center justify-center lg:flex-row flex-col-reverse text-center ">
          <div className="w-1/2">
            <h2 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
              Comfort and Style
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Apparel made for your everyday life
            </h2>
            <p className="text-lg text-gray-600 mb-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              cupiditate aperiam sed ducimus fugiat eligendi.
            </p>
            <Link
              to={"/collection/all"}
              className=" bg-black inline-block mb-3 lg:mb-0 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
            >
              Shop Now
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img
              src={im6}
              alt="featured"
              className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeautredCollection;
