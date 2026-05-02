import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = (toggleSidebar) => {
    const navigate = useNavigate()
    const handleLogout = () => { 
        navigate('/')
     }
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to={"/admin"} className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center ">Admin Dashboard</h2>

      <nav className="flex flex-col space-y-2">
        <NavLink
        onClick={toggleSidebar}
          to={"/admin/users"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2 transition"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink
        onClick={toggleSidebar}
          to={"/admin/products"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2 transition"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>
        <NavLink
        onClick={toggleSidebar}
          to={"/admin/orders"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2 transition"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2 transition"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
        <div className="mt-6">
            <button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2">
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
