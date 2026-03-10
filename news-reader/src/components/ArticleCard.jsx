export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-40 w-full object-cover rounded mb-4"
        />
      )}
      <h2 className="text-lg font-bold mb-2">{article.title}</h2>
      <p className="text-sm text-gray-700 mb-4">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline mt-auto"
      >
        Read more
      </a>
    </div>
  );
}
