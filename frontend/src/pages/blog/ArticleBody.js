import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleBody = () => {
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
      {article.sections.map((section, index) => (
        <div>
          <h2 className="font-bold text-2xl mt-12">{section.sectionTitle}</h2>
          <p className="my-2 text-lg text-justify">{section.passage}</p>
          {section.examples.length > 0 && ( // Check if examples array has elements
            <div className="border border-gray-800 p-6 my-4">
              <h2 className="font-bold text-lg mb-2">Examples:</h2>
              <ul className="list-disc space-y-2 mb-4 ml-12 text-justify">
                {section.examples.map((example, i) => (
                  <li key={i} className="text-lg">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleBody;
