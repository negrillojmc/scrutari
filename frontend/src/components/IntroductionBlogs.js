import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'; 
import moment from 'moment';
import { MdOutlineArrowOutward } from "react-icons/md";
import Article from '../pages/blog/Article';

const IntroductionBlogs = () => {

  const navigate = useNavigate();

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:2000/api/blog/introduction");
      const json = await response.json();

      if (response.ok) {
        setArticles(json);
      }
    };

    fetchArticles();
  }, []);


  return (

    <section className="grid col-span-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles &&
        articles.map((article) => (
          <div
            key={article._id}
            className="border border-gray-100 rounded-md shadow-sm"
            >
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-56 object-cover rounded-tr-md rounded-tl-md"
              />
            <div className="p-4">
              <h3 className="text-xs text-gray-500 font-semibold">
                {article.author} •{" "}
                {moment(article.publishedAt).format("MMMM D, YYYY")}
              </h3>
              <div className="grid grid-cols-10" element={<Article />} onClick={() => navigate(`/api/blog/${article._id}`)}>
                <h1 key={article._id} className="font-bold my-2 col-span-8">
              
                  {article.title}
                </h1>
                <MdOutlineArrowOutward
                  alt="Arrow Outward Icon"
                  className="h-9 w-9 text-black col-span-2 flex justify-self-end"
                />
              </div>
              <div className="rounded-xl px-2 py-1 inline-block">
                <h3
                  key={article._id}
                  className="text-xs text-black font-semibold"
                >
                  {article.category}
                </h3>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default IntroductionBlogs;
