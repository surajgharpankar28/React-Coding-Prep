/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Comment from "./Components/Comment";

const App = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([
    // {
    //   id: uuidv4(),
    //   text: "What is the best way to manage state in React?",
    //   children: [
    //     {
    //       id: uuidv4(),
    //       text: "It depends on your use case. React's built-in useState works well for simple state, but for complex state, consider Redux or Zustand.",
    //       children: [
    //         {
    //           id: uuidv4(),
    //           text: "I've heard React Context is also a good alternative. What do you think?",
    //           children: [
    //             {
    //               id: uuidv4(),
    //               text: "Context is great for global state, but avoid using it for high-frequency updates. It can lead to unnecessary re-renders.",
    //               children: [],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]);

  /**
   * Handles the change event for an input element.
   *
   * @param {Object} e - The event object.
   * @param {Object} e.target - The target element of the event.
   * @param {string} e.target.value - The current value of the input element.
   */
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  /**
   * Handles the creation of a new comment.
   * If the input is not empty, it adds a new comment to the comments array
   * with a unique ID, the input text, and an empty children array.
   * Then, it clears the input field.
   */
  const handleNewComment = () => {
    if (input.trim() === "") return;
    setComments([...comments, { id: uuidv4(), text: input, children: [] }]);
    setInput("");
  };

  /**
   * Adds a reply to a specific comment.
   * It updates the comments state by attaching the reply text to the comment with the given parentId.
   *
   * @param {string} parentId - The ID of the parent comment to which the reply will be added.
   * @param {string} replyText - The text of the reply to be added.
   */
  const addReply = (parentId, replyText) => {
    setComments((prevComments) =>
      attachReply(prevComments, parentId, replyText)
    );
  };

  /**
   * Attaches a reply to a specific comment.
   * It recursively traverses the comments array to find the comment with the given parentId
   * and adds the reply text as a new child comment.
   *
   * @param {Array} comments - The array of comments to traverse.
   * @param {string} parentId - The ID of the parent comment to which the reply will be added.
   * @param {string} replyText - The text of the reply to be added.
   * @returns {Array} - The updated array of comments with the new reply attached.
   */
  const attachReply = (comments, parentId, replyText) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          children: [
            ...comment.children,
            { id: uuidv4(), text: replyText, children: [] },
          ],
        };
      } else if (comment.children.length > 0) {
        return {
          ...comment,
          children: attachReply(comment.children, parentId, replyText),
        };
      }
      return comment;
    });
  };

  const deleteComment = (commentId) => {
    const removeComment = (comments) => {
      return comments
        .filter((comment) => comment.id !== commentId)
        .map((comment) => ({
          ...comment,
          children: removeComment(comment.children),
        }));
    };
    setComments((prevComments) => removeComment(prevComments));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNewComment();
    } else if (e.key === "Escape") {
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
        <h1 className="text-xl font-semibold text-gray-800 mb-3">
          Nested Comments
        </h1>

        <div className="flex space-x-2 mb-4">
          <input
            value={input}
            type="text"
            placeholder="Write a comment..."
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600"
            onClick={handleNewComment}
          >
            Comment
          </button>
        </div>

        <div>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              addReply={addReply}
              deleteComment={deleteComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
