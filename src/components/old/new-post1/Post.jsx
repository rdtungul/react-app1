import classes from './Post.module.css'
function Post(props) {
  const author = props.author
  const body = props.body
  return (
    <li className={classes.post} style={{color: 'light blue'}}>
        <h1 className={classes.title}>{author}</h1>
        <p className={classes.subtitle}>{body}</p>
    </li>
  )
}

export default Post