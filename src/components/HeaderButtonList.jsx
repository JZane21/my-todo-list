import { ButtonApp } from "./ButtonApp";

export const HeaderButtonList = ({todoList,setGreenTodos,
  setYellowTodos,setRedTodos,setGreenButton,setYellowButton,
  setRedButton,greenButton,yellowButton,redButton}) => {

  const getGreenTodos = () => {
    setGreenTodos(todoList.reduce(
      (a,b) => {return (b.importance>=1 && b.importance<4) ? a+1 : a+0},0));
    setGreenButton(!greenButton);
    setYellowButton(false);
    setRedButton(false);
  };

  const getYellowTodos = () => {
    setYellowTodos(todoList.reduce(
      (a,b) => {return (b.importance>=4 && b.importance<8) ? a+1 : a+0},0));
    setGreenButton(false);
    setYellowButton(!yellowButton);
    setRedButton(false);
  };

  const getRedTodos = () => {
    setRedTodos(todoList.reduce(
      (a,b) => {return (b.importance>=8 && b.importance<=10) ? a+1 : a+0},0));
    setGreenButton(false);
    setYellowButton(false);
    setRedButton(!redButton);
  };

  const BOTONES = [
    {textButton:"Low Priority",accion:getGreenTodos},
    {textButton:"Medium Priority",accion:getYellowTodos},
    {textButton:"High Priority",accion:getRedTodos},
  ];

  return (
    <div className="flex flex-row">
      {BOTONES.map((boton) => (
        <ButtonApp
        key={boton.textButton}
        textButton={boton.textButton}
        eventClick={boton.accion}
        typeButton="button"
        />
      ))}
    </div>
  );
};
