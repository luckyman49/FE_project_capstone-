import { Link } from "react-router-dom";

export default function ArticleCard({ article, index }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-40 w-full object-cover rounded mb-4"
        />
      )}

      <h2 className="text-lg font-bold font-sans text-secondary mb-2">
        {article.title}
      </h2>

      <p className="text-sm text-gray-700 font-sans flex-grow">
        {article.description || "No description available."}
      </p>

      <Link
        to={`/article/${index}`}
        className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 font-sans text-sm text-center"
      >
        Read More
      </Link>
    </div>
  );
}
