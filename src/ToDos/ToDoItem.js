import styles from './ToDoItem.module.css';
import Button from '../UI/Button';

const ToDoItem = ({ taskName, taskState }) => {
  return (
    <li className={styles['li-item']}>
      <span>{taskName}</span>
      <div className={styles['btn-grp']}>
        <Button className="incomplete" type="submit">
          Complete
        </Button>
        <Button className="edit" type="submit">
          Edit
        </Button>
        <Button className="delete" type="submit">
          Delete
        </Button>
      </div>
    </li>
  );
};

export default ToDoItem;
