import style from './App.module.css';
import Card from './UI/Card';
import TitleHeader from './UI/TitleHeader';
import ToDoForm from './Forms/ToDoForm';
import ToDoList from './ToDos/ToDoList';

function App() {
  return (
    <div className={style.container}>
      <Card>
        <TitleHeader title="To-Do" />
        <ToDoForm type="text" id="task" label="Add your to-do item..." />
      </Card>
      <Card>
        <ToDoList />
      </Card>
    </div>
  );
}

export default App;
