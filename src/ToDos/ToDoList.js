import styles from './ToDoList.module.css';
import ToDoItem from './ToDoItem';

const ToDoList = props => {
  return (
    <ul className={styles['todo-list']}>
      <ToDoItem taskName="sdsfsdfsdfsdfhasdnfkasdnfklsnfklnaklsdnfklnsakldnfklsandklfnskldnfklsndkflnskldfadklsn" />
    </ul>
  );
};

export default ToDoList;
