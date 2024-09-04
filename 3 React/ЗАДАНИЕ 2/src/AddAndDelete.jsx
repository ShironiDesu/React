import React, { useRef } from 'react';

export default function AddAndDelete({ posts, setPosts }) {
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const courseInputRef = useRef(null);
  const numberInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const addPost = () => {
    const newPost = {
      id: Date.now(),
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
      course: courseInputRef.current.value,
      number: numberInputRef.current.value,
      email: emailInputRef.current.value,
    };

    setPosts([...posts, newPost]);

 
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    courseInputRef.current.value = '';
    numberInputRef.current.value = '';
    emailInputRef.current.value = '';
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Name"
        ref={nameInputRef}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Age"
        ref={ageInputRef}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Course"
        ref={courseInputRef}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Number"
        ref={numberInputRef}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Email"
        ref={emailInputRef}
        style={styles.input}
      />
      <button type="button" onClick={addPost} style={styles.button}>
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
