import React, { useEffect, useState } from "react";
import "../client";
import client from "../client";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data).catch(console.error));
  }, []);

  return (
    <section className="px-5 2xl:max-w-7xl 2xl:mx-auto ">
      <h1 className="font-bold text-4xl mt-5 mb-10 tracking-wide text-center md:text-6xl lg:text-8xl">Blog page</h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {posts.map((post) => (
          <article key={post.slug.current}>
            <img className="max-w-full max-h-72 m-auto" src={post.mainImage.asset.url} alt={post.title} />
            <h4 className="text-xl mt-2">{post.title}</h4>
            <button className="mt-5 mb-10">
              <Link
                className="pt-3 pb-2 px-6 rounded shadow text-white bg-gray-800 hover:bg-transparent border-2 border-gray-800 duration-500 transition-all hover:text-gray-800 font-bold"
                to={`/blog/${post.slug.current}`}
              >
                Read Full Article
              </Link>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
