import { Link } from "react-router-dom";
import { FaHeadset } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <FaHeadset size={26} />
          <h1 className="text-2xl font-bold">
            Support CRM
          </h1>
        </div>

        <Link
          to="/create"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          + Create Ticket
        </Link>
      </div>
    </nav>
  );
}
