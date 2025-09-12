import { useState, useEffect } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import EditPost from './EditModal';
import DeleteModal from './DeleteModal';
import classes from './PostsList.module.css'
import MainHeader from './MainHeader';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true); // modal on and off state
  const [editPost, setEditPost] = useState(null);

  // const [posts, setPosts] = useState([
  //   { id: 1, author: 'Roseph Darl', body: 'Full-Stack Web Developer | Solopreneur | Instructor' },
  // ]); // with sample post added automatically

  
  const [posts, setPosts] = useState(() => {
  // ✅ Load from localStorage on first render
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

// ✅ Save posts to localStorage whenever posts change
useEffect(() => {
  localStorage.setItem('posts', JSON.stringify(posts));
}, [posts]);


  const [deleteTarget, setDeleteTarget] = useState(null); // ✅ store post to delete


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

  
  function requestDeleteHandler(postId) {
    setDeleteTarget(postId); // ✅ store id to delete
  }

  function confirmDeleteHandler() {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== deleteTarget));
    setDeleteTarget(null); // ✅ reset after delete
  }

  function cancelDeleteHandler() {
    setDeleteTarget(null); // ✅ close modal without deleting
  }


  // ✅ Edit handlers
  function requestEditHandler(postId) {
    const postToEdit = posts.find((p) => p.id === postId);
    setEditPost(postToEdit);
  }

  function updatePostHandler(updatedPost) {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setEditPost(null);
  }

  return (
    <>
    <MainHeader createPost={openModal} />
      {modalIsVisible && (
        <Modal>
          <NewPost onCancel={closeModal} onSubmitPost={addPostHandler} />
        </Modal>
      )}

      {editPost && (
        <Modal>
          <EditPost
            post={editPost}
            onCancel={() => setEditPost(null)}
            onUpdate={updatePostHandler}
          />
        </Modal>
      )}

      {/* ✅ Show delete confirmation modal only if target is set */}
      {deleteTarget && (
        <DeleteModal
          onConfirm={confirmDeleteHandler}
          onCancel={cancelDeleteHandler}
        />
      )}

      {posts.length === 0 ? (
        <h2 className={classes.emptyText}>✨ No posts yet — create a new post!</h2>
      ) : (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
              onDelete={requestDeleteHandler}
              onEdit={requestEditHandler}
            />
          ))}
        </ul>
          )}
    </>
  );
}

export default PostsList