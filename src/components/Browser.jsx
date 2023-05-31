export const Browser = ({setSearchedTodo}) => {

  const searchTask = (evento) => {
    evento.preventDefault();
    let todoToFind = evento.target.value;
    todoToFind = todoToFind.toLowerCase();
    setSearchedTodo(todoToFind);
  };

  return (
    <input
    className="outline-none p-2 m-1 rounded-lg shadow-xl w-72 cursor-pointer"
    type="text"
    placeholder="search todo"
    onChange={(evento) => searchTask(evento)}/>
  );
};
