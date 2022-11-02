import style from './ToDoForm.module.css';

const ToDoForm = props => {
  return (
    <form className={style['todo-form']}>
      <div className={style['input-field']}>
        <input type="text" id="task" required />
        <label htmlFor="task">Add your to do here:</label>
      </div>
    </form>
  );
};

export default ToDoForm;
