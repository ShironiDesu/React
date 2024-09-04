import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostInfo() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); 
  const params = useParams();

  const getSinglePost = async () => {
    setLoading(true);
    try {
      const resPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
      const resComm = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`);
      setPost(resPost.data);
      console.log(post);
      setComments(resComm.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

 

  useEffect(() => {
    getSinglePost();
  }, []);

 

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (!post) {
    return <div className="not-found">Пост не найден.</div>;
  }

  return (
    
    <div className="post-container">
    <h2 className="post-title">{post.title}</h2>
    <p className="post-body">{post.body}</p>
    <h3 className="comments-title">Комментарии:</h3>
    {comments.length > 0 ? (
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <span className="comment-name">{comment.name}:</span> {comment.body}
          </li>
        ))}
      </ul>
    ) : (
      <p>Комментариев пока нет.</p>
    )}
  </div>
);
  
}
