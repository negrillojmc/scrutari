import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useParams } from "react-router-dom";

const TableOfContents = () => {
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
    <nav className="mt-10 border border-black p-2 sticky top-24 hidden xl:flex xl:flex-col">
      <div className="font-bold text-lg">On this page</div>
      <ul>
        {article &&
          article.sections.map((section, index) => (
            <li key={index} className="">
              <Link
                to={section.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {section.sectionTitle}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
