import React, { useState } from 'react';

export default function AddAndDelete({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPost = () => {
    setPosts(() => {
      const newPost = {
        id: Date.now(),
        title: title,
        content: content,
      };

      return [...posts, newPost];
    });
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        style={styles.input}
      />
      <button type="submit" onClick={addPost} style={styles.button}>
        Add
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '20px auto',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
