import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css'

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Roseph Darl" body="React JS is awesome!" />
        <Post author="John Doe" body="Bootstrap is awesome!" />
        <Post author="Jane Doe" body="CSS is awesome!" />
      </ul>
    </>
  )
}

export default PostsList