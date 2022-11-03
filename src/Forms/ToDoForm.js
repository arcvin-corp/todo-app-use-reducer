import style from './ToDoForm.module.css';

const ToDoForm = props => {
  return (
    <form>
      <div className={style['input-field']}>
        <input type={props.type} id={props.id} required />
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    </form>
  );
};

export default ToDoForm;
