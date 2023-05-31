import { TodoButton } from "./TodoButton";

export const ButtonList = ({BUTTON_TYPE}) => {
  return (
    <div className="flex flex-row m-1">
      {BUTTON_TYPE.map(buttonType => (
        <TodoButton
        key={buttonType.tipo}
        tipo={buttonType.tipo}
        accion={buttonType.accion}
        />
      ))}
    </div>
  );
};
