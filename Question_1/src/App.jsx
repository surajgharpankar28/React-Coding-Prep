import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null); // Initialize with null
  const [userName, setUserName] = useState("");
  const [userFollower, setUserFollower] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); // Track if a search has been performed

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Btn Clicked");
    setLoading(true);
    setSearched(true); // Set searched to true when the search is initiated
    if (userName) {
      fetchData(userName);
    }
  };

  const fetchData = async (userName) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${userName}`
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const userDetails = await response.json();
      const user1 = userDetails.items?.[0]; // Optional chaining to prevent errors

      const followerResponse = await fetch(
        `https://api.github.com/users/${userName}/followers`
      );
      if (!followerResponse.ok) throw new Error("Network response was not ok");

      const followerDetails = await followerResponse.json();
      const user1_follower = followerDetails; // Optional chaining to prevent errors

      if (user1 && user1_follower) {
        setUser(user1);
        setUserFollower(user1_follower);
        console.log("useState", user1); // Log the actual data we just set
        console.log("followers", userFollower.length); // Log the actual data we just set
      } else {
        setUser(null); // Clear user if no results found
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null); // Clear user on error
    } finally {
      setLoading(false); // Set loading to false when the search completes
    }
  };

  useEffect(() => {
    // fetchData("surajgharpankar28"); // Fetch initial data on mount
  }, []); // Empty dependency array means runs once on mount

  return (
    <div className="min-h-screen bg-gray-100 py-8">
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
        {!loading && user && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              {/* Avatar Section */}
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />

              {/* User Details */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {user.login}
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
                  <p>
                    <strong>ID:</strong> {user.id}
                  </p>
                  <p>
                    <strong>Type:</strong> {user.type}
                  </p>
                  <p>
                    <strong>Followers:</strong> {userFollower.length || "N/A"}
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
        {!loading && searched && !user && userName && (
          <div className="mt-8 text-center text-gray-700">
            <p>No user found. Please try another username.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
