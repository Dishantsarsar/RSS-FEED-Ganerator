"use client";
import React from "react";
import FeedItem from "../components/FeedItem";
import { baseUrl, technology } from "../utils/constants";

const Technology = () => {
  const [data, setData] = React.useState(null);
  const fetchData = async () => {
    const maal = await fetch(`${baseUrl}${technology}`);
    const feed = await maal.json();
    if (feed?.status !== "ok") {
      console.error("Failed to fetch feed", feed);
      return;
    }
    setData(feed);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h2 className="mb-4">{data?.feed?.description}</h2>
      <div>
        {data?.items?.map((item) => (
          <FeedItem key={item?.guid} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Technology;
