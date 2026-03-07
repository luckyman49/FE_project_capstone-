export default function ArticleCard({ article }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{article.title}</h2>
        <p className="text-sm text-gray-600">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
          Read More
        </a>
      </div>
    </div>
  );
}
