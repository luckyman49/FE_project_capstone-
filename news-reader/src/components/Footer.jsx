export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left side: attribution */}
        <p className="text-sm">
          © {new Date().getFullYear()} News Reader App. Built by Ganiyu.
        </p>

        {/* Right side: navigation links */}
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
