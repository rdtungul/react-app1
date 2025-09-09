import classes from './Post.module.css'
import { FaTrash } from "react-icons/fa";

function Post({id, author, body, onDelete}) {
  return (
    <li className={classes.post} style={{color: 'light blue'}}>
      <span className={classes.deleteBtnContainer}><button 
      className={classes.deletePost} 
      onClick={() => onDelete(id)}
      >
        <FaTrash /></button></span>
        <h1 className={classes.title}>{author}</h1>
        <p className={classes.subtitle}>{body}</p>
    </li>
  )
}

export default Post