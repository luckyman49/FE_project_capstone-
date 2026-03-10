export default function Contact() {
  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Have feedback or questions about the News Reader App? Feel free to reach out!
      </p>
      <ul className="text-gray-700 space-y-2">
        <li>Email: <a href="mailto:ganiyu@example.com" className="text-primary hover:underline">ganiyu@example.com</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/yourusername</a></li>
      </ul>
    </div>
  );
}
