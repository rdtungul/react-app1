import classes from './Post.module.css'
function Post(props) {
  const author = props.author
  const body = props.body
  return (
    <div className={classes.post} style={{color: 'light blue'}}>
        <h1>{author}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Post