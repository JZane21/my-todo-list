import { TitleHeader } from "./TitleHeader";
import { Counter } from "./Counter";
import { useState } from "react";
import { InteractionPartHeader } from "./InteractionPartHeader";

export const Header = ({todosNumber,completedTodos,todoList,
  setSearchedTodo,greenTodos,setGreenTodos,yellowTodos,
  setYellowTodos,redTodos,setRedTodos,greenButton,setGreenButton,
  yellowButton,setYellowButton,redButton,setRedButton}) => {

  return (
    <section className="flex flex-col items-start p-2 bg-purple-700">
      <div className="flex justify-center items-center w-full">
        <TitleHeader/>
      </div>
      {todosNumber!==0 && (
      <>
        <Counter
        todosNumber={todosNumber}
        completedTodos={completedTodos}
        />
        <InteractionPartHeader
        setSearchedTodo={setSearchedTodo}
        todoList={todoList}
        setGreenTodos={setGreenTodos}
        setYellowTodos={setYellowTodos}
        setRedTodos={setRedTodos}
        setGreenButton={setGreenButton}
        setYellowButton={setYellowButton}
        setRedButton={setRedButton}
        greenButton={greenButton}
        greenTodos={greenTodos}
        yellowButton={yellowButton}
        yellowTodos={yellowTodos}
        redButton={redButton}
        redTodos={redTodos}
        />
      </>
      )}

    </section>
  );
};
