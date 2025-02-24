import { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [postIDs, setPostIDs] = useState([]);
  const [postMetaData, setPostMetaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialFetchDone = useRef(false); // ✅ Prevents duplicate calls

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return null;
    }
  };

  const getJobTitle = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    return arr.length > 1 ? `${arr[0]} ${arr[1]}` : text;
  };

  const getJobInfo = (text) => {
    const arr = text.split(/\((YC [^)]+)\)/);
    return arr.length > 2 ? arr[2] : "Is hiring...";
  };

  const getFormattedDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const fetchPostMetaData = async (postID) => {
    const apiCalls = postID.map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
      return getData(url);
    });

    const result = await Promise.all(apiCalls);

    if (result && result.length) {
      const newArray = result
        .filter((item) => item !== null)
        .map((item) => ({
          jobTitle: getJobTitle(item?.title || "Unknown Job"),
          jobInfo: getJobInfo(item?.title || "Is hiring..."),
          date: getFormattedDate(item?.time || 0),
          url: item?.url
            ? item.url
            : `https://news.ycombinator.com/item?id=${item?.id || ""}`,
        }));

      setPostMetaData((prevData) => [...prevData, ...newArray]); // ✅ Append new data
    }
  };

  const fetchPostIDs = async () => {
    setLoading(true);
    const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
    const data = await getData(url);

    if (!data || data.length === 0) {
      setLoading(false);
      return;
    }

    setPostIDs(data); // ✅ Store all available job IDs
    await fetchPostMetaData(data.slice(0, 9)); // ✅ Load only first 9 initially
    setLoading(false);
  };

  const handleLoadMore = () => {
    const startIndex = postMetaData.length; // Get next batch start index
    const nextBatch = postIDs.slice(startIndex, startIndex + 6); // Get next 6 IDs

    if (nextBatch.length > 0) {
      fetchPostMetaData(nextBatch);
    }
  };

  useEffect(() => {
    if (!initialFetchDone.current) {
      // ✅ Prevents duplicate fetch
      fetchPostIDs();
      initialFetchDone.current = true;
    }
  }, []);

  return (
    <div className="HackerNewsApp">
      <div className="HackerNewsApp-Container">
        <h1 className="font-bold text-3xl pb-4">HackerNews Job Posts</h1>
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading jobs...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center my-4">
              <h3 className="text-lg font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-md shadow-sm">
                Total Jobs:{" "}
                <span className="text-blue-600">{postIDs.length}</span>
              </h3>
            </div>

            <div className="jobCardsContainer">
              {postMetaData.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div key={index} className="jobCard">
                    <h3 className="companyName">{post.jobTitle}</h3>
                    <p className="jobInfo">{post.jobInfo}</p>
                    <p className="jobDate">{post.date}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center items-center mt-2">
              <button
                className={`bg-blue-500 rounded-md p-2 font-bold text-white cursor-pointer ${
                  postMetaData.length >= postIDs.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleLoadMore}
                disabled={postMetaData.length >= postIDs.length} // ✅ Disable when no more jobs
              >
                {postMetaData.length >= postIDs.length
                  ? "No More Jobs"
                  : "Load More"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
