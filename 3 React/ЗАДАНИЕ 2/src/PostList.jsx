import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts,deletePost}) {
  return (
    <div>
     
        {posts.map((post)=>(
            <PostItem key={post.id} post={post} deletePost={deletePost}></PostItem>
            ))
   
        }
    </div>
  )
}
