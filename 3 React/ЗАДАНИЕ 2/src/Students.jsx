import React from 'react'
import AddAndDelete from './AddAndDelete'
import StudentItem from './StudentItem'

export default function Students({posts,deletePost,setPosts}) {
  return (
    <div>
      <AddAndDelete posts={posts} setPosts={setPosts}></AddAndDelete>
    {posts.map((post)=>(
        <StudentItem key={post.id} post={post} deletePost={deletePost}></StudentItem>
        ))
        
        
    }
    </div>
  )
}
