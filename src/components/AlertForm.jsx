import { ButtonApp } from "./ButtonApp";
import { TextDate } from "./TextDate";
import { TitleCard } from "./TitleCard";

export const AlertForm = ({setAlertForm,setModal,edit,setEdit}) => {

  const setAlertFalse = () => {
    setEdit(false);
    setAlertForm(false);
    setModal(false);
  };

  return (
    <section className="flex flex-col items-center m-1 p-5
    bg-white rounded-lg">
      <TitleCard
      text={!edit ? "Tarea creada" : "Tarea editada"}
      />
      <TextDate
      contentOne={""}
      contentTwo={!edit 
        ? "Su tarea fue creada exitosamente!"
        : "Su tarea fue editada exitosamente!"}
      />
      <ButtonApp
      textButton={"aceptar"}
      typeButton={"button"}
      eventClick={setAlertFalse}
      />
    </section>
  );
};
