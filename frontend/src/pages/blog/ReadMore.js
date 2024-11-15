import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import Article from './Article';

const ReadMore = () => {

  const navigate = useNavigate();

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:2000/api/blog");
      const json = await response.json();

      if (response.ok) {
        // slice the first four articles from the array
        const shuffledArticles = json.sort(() => 0.5 - Math.random());
        const firstFourArticles = shuffledArticles.slice(0, 4);
        setArticles(firstFourArticles);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:col-span-4 gap-8">
      {articles &&
        articles.map((article) => (
          <div className="font-bold flex flex-col gap-2">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="rounded-t-md h-44 object-cover"
            />
            <div className="bg-black text-white rounded-full px-2 py-1 mt-2 mr-auto">
              <h3 key={article._id} className="text-xs font-semibold">
                {article.category}
              </h3>
            </div>
            <h1 key={article._id} element={<Article />} onClick={() => navigate(`/api/blog/${article._id}`)}>{article.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default ReadMore;
