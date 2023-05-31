import { ImportanceIndicator } from "./ImportanceIndicator";
import { ListTextDate } from "./ListTextDate";
import { TextDate } from "./TextDate";

export const TextTodo = ({text,importance,todoCompleted,endDate}) => {
  const ARRAY_PROPS = [
    {word:"prioridad: ",item:importance},
    {word:"fecha límite: ",item:endDate},
    {word:"tarea: ",item:text}
  ];
  return (
    <div className="flex flex-row justify-between items-center
    ">
      <ImportanceIndicator importance={importance}/>
      <div className="flex flex-col">
        <ListTextDate
        ARRAY_PROPS={ARRAY_PROPS}
        />
        {todoCompleted && (
          <TextDate
          contentOne={""}
          contentTwo={"COMPLETADA!"}
          />
        )}
      </div>
    </div>
  ); 
};
