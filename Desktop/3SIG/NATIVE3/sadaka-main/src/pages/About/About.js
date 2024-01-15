import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import jsonData from "./new.json";
import DetailAbout from "./DetailAbout";

const About = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);

  const renderArticles = (articles) => {
    return (
      <div className="flex-shrink max-w-full w-full lg:w-1/2">
        <div className="box-one flex flex-row flex-wrap">
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex-shrink max-w-full w-full sm:w-1/2"
            >
              <Link to={`/article/${article.id}`} className="block">
                <div className="relative hover-img max-h-48 overflow-hidden">
                  <img
                    className="max-w-full w-full mx-auto h-auto"
                    src={article.imageSrc}
                    alt="Image description"
                  />
                  <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                      {article.title}
                    </h2>
                    <div className="pt-1">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                        {article.category}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div
            key={jsonData.cover.id}
            className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1"
          >
            <Link to="/DetailAbout" className="block">
              <div className="relative hover-img max-h-98 overflow-hidden">
                <img
                  className="max-w-full w-full mx-auto h-auto"
                  src={jsonData.cover.imageSrc}
                  alt="Image description"
                />
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <h2 className="text-3xl font-bold capitalize text-white mb-3">
                    {jsonData.cover.title}
                  </h2>
                  <p className="text-gray-100 hidden sm:inline-block">
                    {jsonData.cover.description}
                  </p>
                  <div className="pt-2">
                    <div className="text-gray-100">
                      <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                      {jsonData.cover.category}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {renderArticles(jsonData.articles)}
        </div>
      </div>
    </div>
  );
};

export default About;
