import { useParams, Link } from "react-router-dom";

export default function ArticleDetail({ articles }) {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <p className="p-6 text-secondary font-sans">Article not found.</p>;
  }

  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-bold text-primary mb-4">{article.title}</h2>

      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="mb-4 rounded"
        />
      )}

      <p className="text-gray-700 leading-relaxed mb-4">
        {article.content || article.description}
      </p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back to Home
        </Link>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Original Source
        </a>
      </div>
    </div>
  );
}
