import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag";
import moment from "moment";
import { LuCalendarCheck } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";

const ArticlePreview = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`http://localhost:2000/api/blog/${id}`);
      const json = await response.json();

      if (response.ok) {
        setArticle(json);
      }
    };

    fetchArticle();
  }, [id]);
  return (
    <div>
      {article && (
        <div>
          <Tag tag={article.category} />
          <h1 className="font-black text-5xl mt-8 mb-3">{article.title}</h1>
          <p className="my-4 text-lg">{article.preview}</p>
          <div className="flex items-center pt-2">
            <IoPersonOutline alt="person outline" className="h-5 w-5" />
            <h2 className="text-sm font-semibold ml-2 ">{article.author}</h2>
            <LuCalendarCheck
              alt="calendar with check mark"
              className="h-5 w-5 ml-6"
            />
            <h2 className="text-sm font-semibold ml-2 ">
              {" "}
              {moment(article.publishedAt).format("MMMM D, YYYY")}
            </h2>
            <LuClock2 alt="calendar with check mark" className="h-5 w-5 ml-6" />
            <h2 className="text-sm font-semibold ml-2 ">2 min read</h2>
          </div>
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-auto object-cover my-8"
          />
        </div>
      )}
    </div>
  );
};

export default ArticlePreview;
