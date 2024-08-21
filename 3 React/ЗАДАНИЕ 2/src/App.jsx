import { useState } from 'react'
import AddAndDelete from './AddAndDelete'

import './App.css'
import Header from './Header'
import PostList from './PostList'
import Students from './Students'

function App() {
 const [posts,setPosts] = useState([{ id: 1, name: "First Post", course: "This is the content of the first post." ,age:22,number:+7000000,"email":"example@rofl.ru"},
 { id: 2, name: "Second Post", course: "This is the content of the second post.",age:22,number:+7000000,"email":"example@rofl.ru" },
 { id: 3, name: "Third Post", course: "This is the content of the third post." ,age:22,number:+7000000,"email":"example@rofl.ru"}
])
const [teachers,setTeacher] = useState([{ id: 1, name: "First Post", subject: "This is the content of the first post." ,age:22,number:+7000000,"email":"example@rofl.ru"},
{ id: 2, name: "Second Post", subject: "This is the content of the second post.",age:22,number:+7000000,"email":"example@rofl.ru" },
{ id: 3, name: "Third Post", subject: "This is the content of the third post." ,age:22,number:+7000000,"email":"example@rofl.ru"}])
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
    <Header></Header>
    {/* <AddAndDelete posts={posts} setPosts={setPosts}/>
     <PostList posts={posts} deletePost={deletePost}></PostList> */}
     <Students posts={posts} deletePost={deletePost} setPosts={setPosts}></Students>
    </>
  )
}

export default App
