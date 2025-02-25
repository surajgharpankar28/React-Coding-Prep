/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Comment = ({ comment, addReply, deleteComment }) => {
  const [replyInput, setReplyInput] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  const inputRef = useRef(null);

  const handleReply = () => {
    if (replyInput.trim() === "") return;
    addReply(comment.id, replyInput);
    setReplyInput("");
    setShowReply(false);
    setShowChildren(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleReply();
    } else if (e.key === "Escape") {
      setReplyInput("");
      setShowReply(false);
    }
  };

  useEffect(() => {
    if (showReply && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showReply]);

  return (
    <div className="ml-4 border-l-2 border-gray-300 pl-3">
      {/* Comment Box */}
      <div className="bg-gray-100 p-3 rounded-lg mb-2 flex justify-between">
        <p className="text-gray-800">{comment.text}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3 mb-2">
        <button
          className="text-blue-500 text-sm hover:underline"
          onClick={() => setShowReply(!showReply)}
        >
          Reply
        </button>

        {comment.children.length > 0 && (
          <button
            className="text-gray-500 text-sm hover:underline"
            onClick={() => setShowChildren(!showChildren)}
          >
            {showChildren ? "Hide Replies" : "Show Replies"}
          </button>
        )}
        <button
          className="text-red-500 text-sm hover:underline"
          onClick={() => deleteComment(comment.id)}
        >
          Delete
        </button>
      </div>

      {/* Reply Input */}
      {showReply && (
        <div className="flex items-center space-x-2 mb-2">
          <input
            ref={inputRef}
            value={replyInput}
            type="text"
            placeholder="Write a reply..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setReplyInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
            onClick={handleReply}
          >
            Reply
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            onClick={() => setShowReply(false)}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Nested Comments (Toggled) */}
      {showChildren && comment.children.length > 0 && (
        <div className="ml-4">
          {comment.children.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              addReply={addReply}
              deleteComment={deleteComment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
