import classes from './NewPost.module.css'
function NewPost() {
  // document.querySelector('textarea').addEventListener('change', ()=> {}) // Vanilla JS Event Listener
  function changeBodyHandler(e) {
    console.log(e.target.value)
  } // React Event Listener
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" rows={3} onChange={changeBodyHandler} />
        </p>
        <p><label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
        </p>
    </form>
  )
}

export default NewPost