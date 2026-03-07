export default function Header({ onSearch, onCategory }) {
  return (
    <header className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <h1 className="text-xl font-bold">News Reader</h1>
      <input
        type="text"
        placeholder="Search articles..."
        className="px-3 py-2 rounded text-black"
        onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
      />
      <div className="flex gap-2">
        {["business", "sports", "technology"].map((cat) => (
          <button
            key={cat}
            onClick={() => onCategory(cat)}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}
