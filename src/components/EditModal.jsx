import { useState } from 'react';
import classes from './EditModal.module.css'; // reuse same styles

function EditModal({ post, onCancel, onUpdate }) {
  const [enteredAuthor, setEnteredAuthor] = useState(post.author);
  const [enteredBody, setEnteredBody] = useState(post.body);

  function submitHandler(e) {
    e.preventDefault();
    onUpdate({ ...post, author: enteredAuthor, body: enteredBody }); // ✅ update with new data
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="edit-name">Edit Name</label>
        <input
          type="text"
          id="edit-name"
          value={enteredAuthor}
          onChange={(e) => setEnteredAuthor(e.target.value)}
          required
        />
      </p>
      <p>
        <label htmlFor="edit-body">Edit Message</label>
        <textarea
          id="edit-body"
          rows={3}
          value={enteredBody}
          onChange={(e) => setEnteredBody(e.target.value)}
        />
      </p>
      <p className={classes.actions}>
        <button className={classes.cancelBtn} type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </p>
    </form>
  );
}

export default EditModal;
