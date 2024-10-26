import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = "in",
  pageSize = 8,
  category = "general",
  setProgress,
  apiKey,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    const url = `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&token=${apiKey}`;
    setLoading(true);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`;
    updateNews();
  }, [category]);

  const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&token=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    setPage(page + 1);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
    } catch (error) {
      console.error("Failed to fetch more news:", error);
    }
  };

  return (
    <section className="news-section" aria-labelledby="news-heading">
      <header className="text-center py-4" style={{ marginTop: "90px" }}>
        <h1 id="news-heading">
          NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines
        </h1>
      </header>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <main className="news-container px-3">
          <div className="row">
            {articles.map((element) => (
              <div
                className="news-item col-md-6 col-lg-4 mb-4"
                key={element.url}
              >
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageUrl={element.image || element.urlToImage} // Adjust if necessary
                  newsUrl={element.url}
                  author={element.author || "Unknown"} // Ensure author is a string
                  date={element.publishedAt}
                  source={
                    typeof element.source === "object"
                      ? element.source.name
                      : element.source
                  } // Adjust for source
                />
              </div>
            ))}
          </div>
        </main>
      </InfiniteScroll>
    </section>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default News;
