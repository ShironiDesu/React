import React from 'react'

export default function StudentItem({ post, deletePost}) {
  return (
    <div style={styles.postItem}>
    <div style={styles.textContainer}>
      <span style={styles.title}>{post.name}</span>
      <span style={styles.content}>{post.course}</span>
      <span>{post.age}</span>
      <span>{post.number}</span>
      <span>{post.email}</span>
    </div>
    <button onClick={() => deletePost(post.id)} style={styles.deleteButton}>
      Delete
    </button>
  </div>
  )
}
const styles = {
    postItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      margin: '10px 0',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontWeight: 'bold',
    },
    content: {
      marginTop: '5px',
      color: '#555',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
    },
  };
  