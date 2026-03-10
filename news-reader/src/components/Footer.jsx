import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white p-6 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm font-sans">
          © {new Date().getFullYear()} News Reader App. Built by Ganiyu.
        </p>
        <nav className="flex gap-4 text-sm font-sans">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
