import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyLoader from '../MyLoader';
import MySelect from '../MySelect';
import { usePosts } from '../hooks/usePosts';
import AddAnddDelete from '../AddAndDelete'
import PostList from '../PostList';
const url = 'https://jsonplaceholder.typicode.com/posts';
import '../index.css'
const PostPage = () => {
  const [selectedSort, setSelectedSort] = useState('');
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPostFromApi = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const res = await axios.get(url);
        console.log(res);
        setPosts(res.data);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
  };

  const optionList = [
    { text: 'По названию', value: 'title' },
    { text: 'По описанию', value: 'body' }
  ];

  const filteredPosts = usePosts(posts, selectedSort, search);

  useEffect(() => {
    getPostFromApi();
  }, []);

  return (
    <>
     <AddAnddDelete posts={posts} setPosts={setPosts} />
      <MySelect
        options={optionList}
        defaultValue="Сортировка"
        onChange={sortPost}
      />
      <input
        type="text"
        placeholder="Поиск"
        onInput={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <MyLoader />
      ) : (
        (     <PostList  posts={filteredPosts} deletePost={deletePost}></PostList>)
       
      )}
    </>
  );
};

export default PostPage;
