import { useEffect, useState } from "react";
import { Browser } from "./Browser";
import { HeaderButtonList } from "./HeaderButtonList";

export const InteractionPartHeader = ({
  setSearchedTodo,todoList,setGreenTodos,setYellowTodos,
  setRedTodos,setGreenButton,setYellowButton,setRedButton,
  greenButton,greenTodos,yellowButton,yellowTodos,
  redButton,redTodos
}) => {

  const [width,setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  },[window.innerWidth]);

  return (
    <div className="relative flex flex-col">
      <Browser
      setSearchedTodo={setSearchedTodo}
      />
      <div className={`flex
      ${!(width <= 500) && "flex-row"}
      ${(width <= 500) && "flex-col items-start"}
      ${!(width <= 500) && "items-center"}
      -left-1 relative`}>
        <HeaderButtonList
        todoList={todoList}
        setGreenTodos={setGreenTodos}
        setYellowTodos={setYellowTodos}
        setRedTodos={setRedTodos}
        setGreenButton={setGreenButton}
        setYellowButton={setYellowButton}
        setRedButton={setRedButton}
        greenButton={greenButton}
        yellowButton={yellowButton}
        redButton={redButton}
        />
        <p className={`
        ${!(width <= 500) && "ml-3"}
        ${(width <= 500) && "ml-1"}
        p-1 text-lg text-white font-semibold text-center`}>
          {(greenButton||yellowButton||redButton) ? 
          "Numero de tareas de "+
          (greenButton ? "low priority: " : 
          yellowButton ? "medium priority: " :
          "high priority: ") : ""}
          
          {greenButton ? greenTodos : ""}
          {yellowButton ? yellowTodos : ""}
          {redButton ? redTodos : ""}
        </p>
      </div>
    </div>
  );
};
