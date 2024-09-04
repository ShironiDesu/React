import React from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'
import './index.css';
export default function PostList({posts,deletePost}) {
  return (
    <div>
      
        <TransitionGroup>
        {posts.length > 0 ? (
        posts.map((post) => (
        <CSSTransition key={post.id} timeout={500} classNames='post'>
        <PostItem  post={post} deletePost={deletePost} />
        </CSSTransition>
        ))
        ) : (
          "Нет постов"
          )}
          
          </TransitionGroup>
    </div>
  )
}
