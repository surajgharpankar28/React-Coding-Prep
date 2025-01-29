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
    <div className="min-h-[calc(100vh-10rem)] bg-gray-100 py-8 mt-14 ">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          GitHub User Search
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label
              htmlFor="search"
              className="text-lg font-medium text-gray-700"
            >
              Enter GitHub Username
            </label>
            <div className="flex space-x-2">
              <input
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="search"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g., surajgharpankar28"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="mt-8 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* User Card */}
        {!loading && user && userDetails && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              {/* Avatar Section */}
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-28 h-28 rounded-full border-4 border-blue-500"
              />

              {/* User Details */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {user.login}
                </h2>
              </div>
              <div className="text-left">
                <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
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
                    <strong>Twitter Username: </strong>
                    {userDetails.twitter_username ? (
                      <a
                        href={`https://twitter.com/${userDetails.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
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

              {/* Profile Links */}
              <div className="mt-6">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </div>
        )}

        {/* No User Found Message */}
        {!loading && searchInitiated && !user && userName && (
          <div className="mt-8 text-center text-gray-700">
            <p>No user found. Please try another username.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
