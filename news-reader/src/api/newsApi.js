const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export async function fetchTopHeadlines() {
  const res = await fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
  return res.json();
}

export async function searchArticles(query) {
  const res = await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
  return res.json();
}

export async function fetchByCategory(category) {
  const res = await fetch(`${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
  return res.json();
}
