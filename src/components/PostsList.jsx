import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css'

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value)
  }
    function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value)
  }

  return (
    <>
      <Modal>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Roseph Darl" body="Full-Stack Web Developer | Solopreneur | Instructor" />
      </ul>
    </>
  )
}

export default PostsList