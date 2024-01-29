// import React from "react";

// const CommentList = ({ comments }) => {
//   const renderedComments = comments?.map((comment) => {
//     let content;

//     if (comment.status === "approved") {
//       content = comment.content;
//     }

//     if (comment.status === "pending") {
//       content = "This comment is awaiting moderation";
//     }

//     if (comment.status === "rejected") {
//       content = "This comment has been rejected";
//     }

//     return <li key={comment.id}>{content}</li>;
//   });

//   return <ul>{renderedComments}</ul>;
// };

// export default CommentList;

import React, { useEffect, useState } from "react";
import axios from "axios";
const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments?.map((comment) => (
    <li key={comment.id}>{comment.content + " "}</li>
  ));
  return (
    <div>
      CommentList + ""+""
      <br />
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
