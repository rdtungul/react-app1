import {useState} from 'react'
import classes from './NewPost.module.css'

function NewPost() {
  
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredName, setEnteredName] = useState('');
  // document.querySelector('textarea').addEventListener('change', ()=> {}) // Vanilla JS Event Listener
  function changeBodyHandler(e) {
    setEnteredBody(e.target.value)
  } // React Event Listener - Body Text
  function changeNameHandler(e) {
    setEnteredName(e.target.value)
  } // React Event Listener - Name Text
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body"  rows={3} onChange={changeBodyHandler} value={enteredBody} />
        </p>
        <p className={classes.enteredBodyText}>{enteredBody}</p>
        <p><label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={changeNameHandler} value={enteredName} required />
        <p className={classes.enteredBodyText}>{enteredName}</p>
        </p>
    </form>
  )
}

export default NewPost