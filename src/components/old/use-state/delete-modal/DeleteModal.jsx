import classes from './DeleteModal.module.css';

function DeleteModal({ onConfirm, onCancel }) {
  return (
    <>
        <div className={classes.backdrop}>
        <div className={classes.modal}>
            <h2>Are you sure?</h2>
            <p>This action cannot be undone.</p>
            <br />
            <div className={classes.actions}>
            <button className={classes.cancelBtn} onClick={onCancel}>
                No
            </button>
            <button className={classes.deleteBtn} onClick={onConfirm}>
                Yes, Delete
            </button>
            </div>
        </div>
        </div>
    </>
  );
}

export default DeleteModal;
