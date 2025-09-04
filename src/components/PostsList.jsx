import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css'
import MainHeader from './MainHeader';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true); // modal on and off state
  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')

  function showModal() {
    setModalIsVisible(true)
  } // open modal function

  function closeModal() {
    setModalIsVisible(false);
  } // close modal function

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value)
  }
    function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value)
  }

  return (
    <>
    <MainHeader createPost={showModal} />
      {modalIsVisible && (
        <Modal onClose={closeModal}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Roseph Darl" body="Full-Stack Web Developer | Solopreneur | Instructor" />
      </ul>

    </>
  );
}

export default PostsList