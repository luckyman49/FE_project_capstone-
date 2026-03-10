import { NavLink } from "react-router-dom";

export default function Header({ onSearch, onCategory }) {
  return (
    <header className="bg-primary text-white p-4 flex flex-col sm:flex-row justify-between items-center gap-4 w-full max-w-6xl mx-auto">
      <h1 className="text-xl font-bold font-sans">News Reader</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search articles..."
        className="px-3 py-2 rounded text-black font-sans w-full sm:w-64"
        onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
      />

      {/* Category buttons with distinct colors */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onCategory("business")}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Business
        </button>
        <button
          onClick={() => onCategory("sports")}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Sports
        </button>
        <button
          onClick={() => onCategory("technology")}
          className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
        >
          Technology
        </button>
      </div>

      {/* Navigation links with spacing, colors, and active highlighting */}
      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `inline-block px-3 py-1 rounded ${isActive
              ? "bg-red-700 text-white font-bold underline"
              : "text-red-500 hover:bg-red-100 hover:text-red-700"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `inline-block px-3 py-1 rounded ${isActive
              ? "bg-yellow-600 text-white font-bold underline"
              : "text-yellow-500 hover:bg-yellow-100 hover:text-yellow-700"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `inline-block px-3 py-1 rounded ${isActive
              ? "bg-pink-600 text-white font-bold underline"
              : "text-pink-500 hover:bg-pink-100 hover:text-pink-700"}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
