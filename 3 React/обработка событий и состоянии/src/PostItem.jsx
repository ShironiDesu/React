import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import MyButton from './MyButton';
import styles from './PostItem.module.css'
export default function PostItem({ post, deletePost }) {
  const navigate = useNavigate()
  const openPost = (post_id) =>{
navigate(`/posts/${post_id}`)
  }
  return (
    
    <div className={styles.postItem} >
      <div className={styles.textContainer} >
       
        <span className={styles.title} >{post.title}</span>
        <span className={styles.content} >{post.content}</span>
      </div>
      <MyButton onClick={()=>deletePost(post.id)} id={post.id}>Delete</MyButton>
      <MyButton onClick={()=>openPost(post.id)}>Open</MyButton>

    </div>
   
  );
}


