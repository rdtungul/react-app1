import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({onAuthorChange, onBodyChange, onCancel}) {

  function submitHandler(e) {
    e.preventDefault()
    onCancel()
  } // closing the modal after hitting 'enter' key
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">Write a Message</label>
            <textarea id="body" placeholder="Write something" rows={3} onChange={onBodyChange} />
        </p>
        <p><label htmlFor="name">Enter Name</label>
        <input type="text" placeholder="Enter your name" id="name" onChange={onAuthorChange} required />
        </p>
    </form>
  )
}

export default NewPost