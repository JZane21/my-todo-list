import { ButtonApp } from "./ButtonApp";

export const ButtonsForm = ({setModal,edit}) => {

  const BUTTONS = [
    {
      textButton:(!edit ? "agregar tarea" : "editar tarea"),
      eventClick:() => {},
      typeButton:"submit"
    },
    {
      textButton:"cancelar",
      eventClick:() => setModal(false),
      typeButton:"button"
    }
  ];

  return (
    <div className="flex flex-row">
      {
        BUTTONS.map(element => (
          <ButtonApp
          key={element.textButton}
          textButton={element.textButton}
          eventClick={element.eventClick}
          typeButton={element.typeButton}
          />
        ))
      }
    </div>
  );
};
