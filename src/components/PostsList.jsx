import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css'
import MainHeader from './MainHeader';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true); // modal on and off state

  const [posts, setPosts] = useState([
    { author: 'Roseph Darl', body: 'Full-Stack Web Developer | Solopreneur | Instructor' },
  ])

  function openModal() {
    setModalIsVisible(true)
  } // open modal function

  function closeModal() {
    setModalIsVisible(false);
  } // close modal function
  


  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]) // add new post at top
  }


  return (
    <>
    <MainHeader createPost={openModal} />
      {modalIsVisible && (
        <Modal>
          <NewPost onCancel={closeModal} onSubmitPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostsList