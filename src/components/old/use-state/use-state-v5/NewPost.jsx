import classes from './NewPost.module.css'

function NewPost({onAuthorChange, onBodyChange, onCancel}) {

  return (
    <form className={classes.form}>
        <p><label htmlFor="name">Enter Name</label>
        <input type="text" placeholder="Enter your name" id="name" onChange={onAuthorChange} required />
        </p>
        <p>
            <label htmlFor="body">Write a Message</label>
            <textarea id="body" placeholder="Write something" rows={3} onChange={onBodyChange}/>
        </p>
        <p className={classes.actions}>
        <button className={classes.cancelBtn} type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
        </p>
    </form>
  )
}

export default NewPost