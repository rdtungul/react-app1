import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({onCancel, onSubmitPost}) {
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value)
  }
  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault() // stop form from reloading page

    // send data up to parent
    onSubmitPost({
      author: enteredAuthor,
      body: enteredBody,
    })

    // reset local state (optional)
    setEnteredAuthor('')
    setEnteredBody('')

    // close modal
    onCancel()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <p><label htmlFor="name">Enter Name</label>
        <input type="text" placeholder="Enter your name" id="name" onChange={authorChangeHandler} required />
        </p>
        <p>
            <label htmlFor="body">Write a Message</label>
            <textarea id="body" placeholder="Write something" rows={3} onChange={bodyChangeHandler}/>
        </p>
        <p className={classes.actions}>
        <button className={classes.cancelBtn} type='button' onClick={onCancel}>Cancel</button>
        <button className={classes.submitBtn}>Post</button>
        </p>
    </form>
  )
}

export default NewPost