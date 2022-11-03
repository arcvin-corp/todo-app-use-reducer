import style from './App.module.css';
import Card from './UI/Card';
import TitleHeader from './UI/TitleHeader';
import ToDoForm from './Forms/ToDoForm';

function App() {
  return (
    <div className={style.container}>
      <Card>
        <TitleHeader title="To-Do" />
        <ToDoForm type="text" id="task" label="Add your to-do item..." />
      </Card>
      <Card>
        <TitleHeader title="To-Do" />
        <ToDoForm type="text" id="task-1" label="Add your to-do item..." />
      </Card>
    </div>
  );
}

export default App;
