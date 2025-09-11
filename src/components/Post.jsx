import classes from './Post.module.css'
import { FaTrash, FaEdit } from "react-icons/fa";

function Post({id, author, body, onDelete, onEdit}) {
  return (
    <li className={classes.post} style={{color: 'light blue'}}>
      <div className={classes.actionBtnContainer}>
        <span className={classes.editBtnContainer}><button className={classes.editPost}
            onClick={() => onEdit(id)}>
          <FaEdit /></button></span>
        <span className={classes.deleteBtnContainer}><button 
        className={classes.deletePost} 
        onClick={() => onDelete(id)}
        >
          <FaTrash /></button></span>
        </div>
        <h1 className={classes.title}>{author}</h1>
        <p className={classes.subtitle}>{body}</p>
    </li>
  )
}

export default Post