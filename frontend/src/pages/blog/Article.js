import React from "react";
import TableOfContents from "./TableOfContents";
// import ArticleTemplate from "./ArticleTemplate";
import AuthorTemplate from "./AuthorTemplate";
import SocialsDock from "./SocialsDock";
import BlackLine from "../../components/BlackLine";
import ReadMore from "./ReadMore";
import ArticlePreview from "./ArticlePreview";
import ArticleBody from "./ArticleBody";

const Article = () => {
  return (
    <main className="p-10">

      {/* The AUTHOR AND ARTICLE DETAILS Section */}
      <section className="grid grid-cols-1 xl:grid-cols-4 sm:px-20 md:px-28 xl:px-40 xl:gap-8 mt-6">
        <div className="order-last xl:order-none col-span-1 mt-8 xl:mt-0">
          <AuthorTemplate />
          <TableOfContents />
        </div>
        <div className="col-span-3">
          <ArticlePreview />
          <ArticleBody />
        </div>
      </section>

      {/* The SOCIALS Section */}
      <section className="grid grid-cols-1 xl:grid-cols-4 sm:px-20 md:px-28 xl:px-40 xl:gap-8 mt-6">
        <SocialsDock />
        <BlackLine />
      </section>

      {/* The READ MORE Section */}
      <section className="grid grid-cols-1 xl:grid-cols-4 my-20 xl:my-10 sm:px-20 md:px-28 xl:px-40 gap-4">
        <div>
          <h1 className="font-black text-2xl xl:col-span-4">Read more</h1>
        </div>
        <ReadMore />
      </section>
    </main>
  );
};

export default Article;
