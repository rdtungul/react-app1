import classes from './NewPost.module.css'
function NewPost() {
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" rows={3} />
        </p>
        <p><label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
        </p>
    </form>
  )
}

export default NewPost