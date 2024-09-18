import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const AuthorTemplate = () => {
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
        <div className="bg-gray-100 flex container flex-col items-center justify-center p-4 rounded-2xl h-auto xl:h-1/4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="x"
            className="aspect-ratio-1/1 rounded-full w-32 h-32 object-cover mb-2"
          />
          <h1 className="font-bold">{article.author}</h1>
          <div className="flex mt-1">
            <FaFacebook className="h-5 w-5" />
            <BiLogoGmail className="h-5 w-5 ml-3" />
          </div>
          <p className="p-4 text-sm text-center">{article.content}</p>
        </div>
      )}
    </div>
  );
};

export default AuthorTemplate;
