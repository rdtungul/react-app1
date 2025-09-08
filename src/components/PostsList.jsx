import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css'
import MainHeader from './MainHeader';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true); // modal on and off state

  const [posts, setPosts] = useState([
    { id: 1, author: 'Roseph Darl', body: 'Full-Stack Web Developer | Solopreneur | Instructor' },
  ]);

  function openModal() {
    setModalIsVisible(true)
  } // open modal function

  function closeModal() {
    setModalIsVisible(false);
  } // close modal function
  


  function addPostHandler(postData) {
    setPosts((prevPosts) => [
      { id: Date.now(), ...postData }, // ✅ unique id
      ...prevPosts,
    ]);
  }

  function deletePostHandler(postId) {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId)); // ✅ delete single post
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
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            body={post.body}
            onDelete={deletePostHandler}
          />
        ))}
      </ul>
    </>
  );
}

export default PostsList