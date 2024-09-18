import React from "react";

const TableOfContents = () => {
  return (
    <nav className="mt-10 border border-black p-2 sticky top-24 hidden xl:flex xl:flex-col">
      <div className="font-bold text-lg">On this page</div>
      <ul>
        <li>
          <a href="">Introduction</a>
        </li>
        <li>
          <a href="">Point 1</a>
        </li>
        <li>
          <a href="">Point 2</a>
        </li>
        <li>
          <a href="">Point 3</a>
        </li>
        <li>
          <a href="#">Example</a>
        </li>
        <li>
          <a href="#">Conclusion</a>
        </li>
      </ul>
    </nav>
  );
};

export default TableOfContents;
