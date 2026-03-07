import { useEffect, useState } from "react";
import { fetchTopHeadlines, searchArticles, fetchByCategory } from "./api/newsApi";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import LoadingSkeleton from "./components/LoadingSkeleton";
import Footer from "./components/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load headlines on first render
  useEffect(() => {
    fetchTopHeadlines()
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch headlines");
        setLoading(false);
      });
  }, []);

  // Handle search
  const handleSearch = (query) => {
    setLoading(true);
    setError(null);
    searchArticles(query)
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch search results");
        setLoading(false);
      });
  };

  // Handle category filter
  const handleCategory = (category) => {
    setLoading(true);
    setError(null);
    fetchByCategory(category)
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch category");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with search + category buttons */}
      <Header onSearch={handleSearch} onCategory={handleCategory} />

      {/* Main content */}
      <main className="flex-grow p-6">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading ? <LoadingSkeleton /> : <NewsList articles={articles} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
