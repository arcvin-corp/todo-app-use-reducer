import style from './App.module.css';
import Card from './UI/Card';
import TitleHeader from './UI/TitleHeader';
import ToDoForm from './Forms/ToDoForm';

function App() {
  return (
    <div className={style.container}>
      <Card>
        <TitleHeader title="ToDo-Awe" />
        <ToDoForm />
      </Card>
    </div>
  );
}

export default App;
