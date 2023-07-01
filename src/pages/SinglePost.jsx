import React, { useEffect, useState } from "react";
import "../client";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import BlockContent from '@sanity/block-content-to-react'

function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        slug,
        body,
        mainImage {
          asset-> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        setSinglePost(data[0]);
      });
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {console.log(slug)}
      {isLoading ? (
        <h1 className='text-4xl uppercase font-bold tracking-wide md:text-6xl lg:text-8xl flex justify-center items-center h-screen'>Loading...</h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <h1 className="text-4xl uppercase font-bold tracking-wide md:text-6xl lg:text-8xl text-center mt-5">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t"
            />
          )}
          <p>By Erfan</p>

          <div className="block__content">
            <BlockContent blocks={singlePost.body} projectId='t8y6s7c3' dataset="production" />
          </div>

          <button className="mt-7">
            <Link
              className="pt-3 pb-2 px-6 rounded shadow text-white bg-gray-800 hover:bg-transparent border-2 border-gray-800 duration-500 transition-all hover:text-gray-800 font-bold "
              to={"/blog"}
            >Read More Articles</Link>
          </button>
        </section>
      )}
    </>
  );
}

export default SinglePost;
