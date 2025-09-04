import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost({onAuthorChange, onBodyChange}) {

  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Write a Message</label>
            <textarea id="body" placeholder="Write something" rows={3} onChange={onBodyChange} autoFocus/>
        </p>
        <p><label htmlFor="name">Enter Name</label>
        <input type="text" placeholder="Enter your name" id="name" onChange={onAuthorChange} required />
        </p>
    </form>
  )
}

export default NewPost