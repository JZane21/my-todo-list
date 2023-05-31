export const Counter = ({completedTodos,todosNumber}) => {
  return (
    <h1 className="p-1 m-1 ml-0 font-semibold text-2xl text-white">
      Tareas completadas: {completedTodos} de {todosNumber}
    </h1>
  );
};
