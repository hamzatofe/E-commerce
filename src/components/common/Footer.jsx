import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-4">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new Products, exclusive events, and
            online offers.
          </p>
          <p className="font-medium text-sm text-gray-600">
            Sign up and get 10% off your first order.
          </p>
          <form action="" className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md
                    focus:outline-none  focus:shadow-lg transition"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 text-sm rounded-r-md hover:bg-gray-800 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-lg text-gray-700 mb-4 ">shop</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                Men's top Wear
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                Women's top Wear
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to={"#"} className="hover:text-gray-600 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 hover:scale-110 transition"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 hover:scale-110 transition"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 hover:scale-110 transition"
            >
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>
          <p className="text-gray-700">Call Us</p>
          <p className="flex items-center gap-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer mt-6">
            <FiPhoneCall /> +(963) 944334433
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
            2025, CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
