import ArticleCard from "./ArticleCard";

export default function NewsList({ articles }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {articles.map((article, idx) => (
        <ArticleCard key={idx} article={article} />
      ))}
    </div>
  );
}
