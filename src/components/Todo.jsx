import { useState,useEffect } from "react";
import { TextTodo } from "./TextTodo";
import { ButtonList } from "./ButtonList";

export const Todo = (
  {objectTodo,index,todoList,setTodoList,todosNumber,
  setTodosNumber,completedTodos,setCompletedTodos,
  setEdit,setEditTodo,setModal}) => {

  const text = objectTodo.text;
  const importance = objectTodo.importance;
  const endDate = objectTodo.endDate;

  const setCompleted = () => {
    let auxiliarList = [...todoList];
    // const index = auxiliarList.findIndex(todo=>todo.id === id);
    auxiliarList[index].completed = !auxiliarList[index].completed;
    setTodoList([...auxiliarList]);
    if(auxiliarList[index].completed){
      setCompletedTodos(completedTodos+1);
    }else{
      setCompletedTodos(completedTodos-1);
    }
  };

  const deleteTodo = () => {
    let auxiliarList = [...todoList];
    // const index = auxiliarList.findIndex(todo=>todo.id===id);
    setTodosNumber(todosNumber-1);
    if(auxiliarList[index].completed){
      setCompletedTodos(completedTodos-1);
    }
    auxiliarList.splice(index,1);
    setTodoList([...auxiliarList]);
  };

  const changeTodo = () => {
    setEditTodo({
      index:index,text:text,importance:importance,endDate:endDate
    });
    setEdit(true);
    setModal(true);
  };

  const BUTTON_TYPE = [
    {tipo: "edit", accion: () => changeTodo()},
    {tipo: "check", accion: () => setCompleted()},
    {tipo: "delete", accion: () => deleteTodo()},
  ];

  return (
    <div className="flex flex-row m-1 p-2 justify-between items-center
    bg-white rounded-lg shadow-lg h-max">
      <TextTodo
      text={text}
      // todoCompleted={todoList.filter(i => i.id===id)[0].completed}
      todoCompleted={todoList[index].completed}
      importance={importance}
      endDate={endDate}
      />
      <ButtonList
      BUTTON_TYPE={BUTTON_TYPE}
      />
    </div>
  );
};
