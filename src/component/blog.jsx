import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";

const Blog = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  console.log("API Key:", API_KEY);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "us", // Get news from the US
            category: "technology",
            pageSize: 10,
            apiKey: API_KEY,
          },
        });
        setNews(response.data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="max-w-6xl container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">Blog</h2>
        <p className="text-gray-600">Get the latest tech news 📰</p>
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading news...</p>
      ) : news.length === 0 ? (
        <p className="text-center text-lg">No articles found.</p>
      ) : (
        <Masonry
          breakpointCols={{ default: 3, 1024: 2, 768: 1 }}
          className="flex -ml-4"
          columnClassName="pl-4"
        >
          {news.map((article, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-md mb-4" />
              )}
              <h2 className="text-lg font-bold">{article.title}</h2>
              <p className="text-sm text-gray-700 mb-3">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </Masonry>
      )}
    </section>
  );
};

export default Blog;
