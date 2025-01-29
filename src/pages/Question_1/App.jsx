import { useEffect, useState } from "react";
import "/src/App.css";

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearchInitiated(true);
    if (userName) {
      fetchUserData(userName);
    }
  };

  const fetchUserData = async (userName) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${userName}`
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const { items } = await response.json();
      const selectedUser = items?.[0];

      if (selectedUser) {
        const followerResponse = await fetch(selectedUser.url);
        if (!followerResponse.ok)
          throw new Error("Network response was not ok");

        const followerData = await followerResponse.json();
        setUser(selectedUser);
        setUserDetails(followerData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUserName("");
    setUser(null);
    setUserDetails(null);
    setSearchInitiated(false);
  };

  useEffect(() => {
    // Optional: Uncomment to fetch initial data on mount
    // fetchUserData("surajgharpankar28");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-extrabold text-black mb-6">
          GitHub User Search
        </h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 text-center text-lg border border-grey-500 bg-transparent text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500"
            type="text"
            id="search"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter GitHub Username"
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300"
            >
              Clear
            </button>
          </div>
        </form>

        {/* Loading Spinner */}
        {loading && (
          <div className="mt-6 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
          </div>
        )}

        {/* User Card */}
        {!loading && user && userDetails && (
          <div className="mt-6 bg-white bg-opacity-25 backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
              />
              <h2 className="text-2xl font-bold text-black">{user.login}</h2>

              <div className="text-black text-center w-full">
                <div className="grid grid-cols-2 gap-4">
                  <p>
                    <strong>ID:</strong> {user.id}
                  </p>
                  <p>
                    <strong>Type:</strong> {user.type}
                  </p>
                  <p>
                    <strong>Followers:</strong> {userDetails.followers || "N/A"}
                  </p>
                  <p>
                    <strong>Company:</strong> {userDetails.company || "N/A"}
                  </p>
                  <p>
                    <strong>Location:</strong> {userDetails.location || "N/A"}
                  </p>
                  <p>
                    <strong>Twitter:</strong>{" "}
                    {userDetails.twitter_username ? (
                      <a
                        href={`https://twitter.com/${userDetails.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 hover:underline"
                      >
                        {userDetails.twitter_username}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                  <p>
                    <strong>Public Repos:</strong>{" "}
                    {userDetails.public_repos || "N/A"}
                  </p>
                  <p>
                    <strong>Hireable:</strong>{" "}
                    {userDetails.hireable ? "Yes" : "No"}
                  </p>
                </div>
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        )}

        {/* No User Found Message */}
        {!loading && searchInitiated && !user && userName && (
          <div className="mt-6 text-white">
            <p>No user found. Please try another username.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
