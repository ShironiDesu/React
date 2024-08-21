import { useState } from 'react'
import AddAndDelete from './AddAndDelete'

import './App.css'
import PostList from './PostList'

function App() {
 const [posts,setPosts] = useState([{ id: 1, title: "First Post", content: "This is the content of the first post." },
 { id: 2, title: "Second Post", content: "This is the content of the second post." },
 { id: 3, title: "Third Post", content: "This is the content of the third post." }
])
const deletePost = (id) =>{
  setPosts(()=>{
    const newPostsArr = [...posts]
    const indexToDelete = newPostsArr.findIndex(post => post.id === id);
    if (indexToDelete !== -1) {
      
      newPostsArr.splice(indexToDelete, 1);
    }
    
    return newPostsArr;
  })
}
  return (
    <>
    <AddAndDelete posts={posts} setPosts={setPosts}/>
     <PostList posts={posts} deletePost={deletePost}></PostList>
    </>
  )
}

export default App
