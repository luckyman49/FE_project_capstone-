import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchTopHeadlines, searchArticles, fetchByCategory } from "./api/newsApi";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import LoadingSkeleton from "./components/LoadingSkeleton";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <main className="flex-grow p-6">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading ? <LoadingSkeleton /> : <NewsList articles={articles} />}
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
