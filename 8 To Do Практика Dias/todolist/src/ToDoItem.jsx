import React, { useState } from 'react';

export default function ToDoItem({ text, completed, onToggle, onDelete, onEdit }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDelete = () => {
    setIsDeleting(true);

  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim() !== '') {
      onEdit(editedText);
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setEditedText(e.target.innerText);
  };

  if (isDeleting) return null;

  return (
    <li className={`todo-item ${isDeleting ? 'deleting' : ''}`}>
      {isEditing ? (
        <div>
          <span
            contentEditable={true}
            onInput={handleChange}
            suppressContentEditableWarning={true}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {editedText}
          </span>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {text}
          </span>
          <input type="checkbox" checked={completed} onChange={onToggle} />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
}
