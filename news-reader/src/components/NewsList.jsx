import ArticleCard from "./ArticleCard";

export default function NewsList({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <p className="text-center text-secondary font-sans">
        No articles found. Try another search or category.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}
