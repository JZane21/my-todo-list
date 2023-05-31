import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList';
import { Todo } from './components/Todo';
import { AddButton } from './components/AddButton';
import { Modal } from './components/Modal';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todosNumber, setTodosNumber] = useState(0);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [searchedTodo, setSearchedTodo] = useState("");
  const [modal,setModal] = useState(false);
  const [givenId,setGivenId] = useState(0);
  const [edit,setEdit] = useState(false);
  const [greenTodos,setGreenTodos] = useState(0);
  const [yellowTodos,setYellowTodos] = useState(0);
  const [redTodos,setRedTodos] = useState(0);

  const [greenButton,setGreenButton]=useState(false);
  const [yellowButton,setYellowButton]=useState(false);
  const [redButton,setRedButton]=useState(false);
  // id:1, text:"hola mundo", importance:9,
  // completed: false, endDate:""
  const [editTodo,setEditTodo] = useState({
    index:0,text:'',importance:'',endDate:''
  });
  const [alertForm,setAlertForm] = useState(false);

  return (
    <main className='bg-cyan-400 fixed top-0 left-0 right-0 bottom-0'>
      <Header
      todoList={todoList}
      todosNumber={todosNumber}
      completedTodos={completedTodos}
      setSearchedTodo={setSearchedTodo}
      greenTodos={greenTodos}
      yellowTodos={yellowTodos}
      redTodos={redTodos}
      setGreenTodos={setGreenTodos}
      setYellowTodos={setYellowTodos}
      setRedTodos={setRedTodos}
      greenButton={greenButton}
      setGreenButton={setGreenButton}
      yellowButton={yellowButton}
      setYellowButton={setYellowButton}
      redButton={redButton}
      setRedButton={setRedButton}
      />

      <TodoList
      todosNumber={todosNumber}
      >
      {
        todoList.filter(todo =>
          (!greenButton && !yellowButton 
            && !redButton && todo.text.toLowerCase().includes(searchedTodo))
          || (greenButton && (todo.importance>=1 && todo.importance<4)
          && todo.text.toLowerCase().includes(searchedTodo))
          || (yellowButton && (todo.importance>=4 && todo.importance<8)
          && todo.text.toLowerCase().includes(searchedTodo))
          || (redButton && (todo.importance>=8 && todo.importance<=10)
          && todo.text.toLowerCase().includes(searchedTodo))
          )
          .map(
          todo => (
            <Todo
            key={todo.id}
            index={todoList.indexOf(todo)}
            objectTodo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
            todosNumber={todosNumber}
            setTodosNumber={setTodosNumber}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
            setEdit={setEdit}
            setEditTodo={setEditTodo}
            setModal={setModal}
            setAlertForm={setAlertForm}
            />
          )
        )
      }
      </TodoList>

      <AddButton
      setModal={setModal}
      setEdit={setEdit}
      setEditTodo={setEditTodo}
      />

      {modal && (
        <Modal
        todosNumber={todosNumber}
        setTodosNumber={setTodosNumber}
        todoList={todoList}
        setTodoList={setTodoList}
        setModal={setModal}
        givenId={givenId}
        setGivenId={setGivenId}
        edit={edit}
        setEdit={setEdit}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setAlertForm={setAlertForm}
        alertForm={alertForm}
        />
      )}
    </main>
  );
};

export default App
