import { AlertForm } from './AlertForm';
import { TodoForm } from './TodoForm';

export const Modal = ({
  todosNumber,
  setTodosNumber,
  todoList,
  setTodoList,
  setModal,
  givenId,
  setGivenId,
  edit,
  setEdit,
  editTodo,
  setEditTodo,
  setAlertForm,
  alertForm
}) => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-60
    bg-slate-500 flex justify-center items-center">
      {!alertForm && (
        <TodoForm
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
        />
      )}
      {alertForm && (
        <AlertForm
        edit={edit}
        setEdit={setEdit}
        setAlertForm={setAlertForm}
        setModal={setModal}
        />
      )}
    </section>
  );
};
