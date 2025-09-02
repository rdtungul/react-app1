import classes from './Post.module.css'
function Post({author, body}) {
  return (
    <li className={classes.post} style={{color: 'light blue'}}>
        <h1 className={classes.title}>{author}</h1>
        <p className={classes.subtitle}>{body}</p>
    </li>
  )
}

export default Post