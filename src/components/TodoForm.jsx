import { useEffect, useState } from "react";
import { QuestionForm } from "./QuestionForm";
import { ButtonApp } from "./ButtonApp";
import { ErrorForm } from "./ErrorForm";
import { TitleCard } from "./TitleCard";
import { ButtonsForm } from "./ButtonsForm";

export const TodoForm = (
  {todosNumber,setTodosNumber,todoList,setTodoList,setModal,
  givenId,setGivenId,edit,editTodo,setEditTodo,
  setAlertForm}) => {

  const [todoText,setTodoText] = 
  useState(
    (editTodo.text!=='' ? editTodo.text : (
      localStorage.getItem("todoText") ? 
      localStorage.getItem("todoText") :
      ''
    )));
  
  const [todoPriority,setTodoPriority] = 
  useState(
    (editTodo.importance!=='' ? editTodo.importance : (
      localStorage.getItem("todoPriority") ?
      localStorage.getItem("todoPriority") :
      ''
    )));
  
  // id:1, text:"hola mundo", importance:9,
  // completed: false, endDate:""
  const [todoDate,setTodoDate] = 
  useState(
    (editTodo.endDate!=='' ? editTodo.endDate : (
      localStorage.getItem("todoDate") ?
      localStorage.getItem("todoDate") :
      ''
    )));
  
  useEffect(() => {
    localStorage.setItem("todoText",todoText);
    localStorage.setItem("todoPriority",todoPriority)
    localStorage.setItem("todoDate",todoDate)
  },[todoText,todoPriority,todoDate]);

  const [correctDates,setCorrectdates] = useState(true);

  class Instruccion {
    constructor(instruccion,placeHolder,valueState,setValueState,tipo){
      this.instruccion = instruccion;
      this.placeHolder = placeHolder;
      this.valueState = valueState;
      this.setValueState = setValueState;
      this.tipo = tipo;
    }

    actualizarValor = (valor) => {
      this.setValueState(valor);
    };
  }

  const REQUERIMIENTOS_FORMULARIO = [
    new Instruccion("Escriba la tarea que desea agregar",
    "tarea",todoText,setTodoText,"text"),
    new Instruccion("Escriba la importancia que tendrá la tarea (de 1 a 10)",
    "1-10",todoPriority,setTodoPriority,"text"),
    new Instruccion("Agregue la fecha en que vencerá la tarea",
    "1-10",todoDate,setTodoDate,"date"),
  ];

  useEffect(() => {
    setGivenId(givenId+1);
  },[todosNumber]);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // id:1, text:"hola mundo", importance:9,
    // completed: false, endDate:""
    if(![todoText,todoPriority,todoDate].includes('')
    && Number(todoPriority) && (todoPriority<=10 && todoPriority>0)){
      if(edit){
        const auxList = [...todoList];
        auxList[editTodo.index].text = todoText;
        auxList[editTodo.index].importance = todoPriority;
        auxList[editTodo.index].endDate = todoDate;
        setEditTodo({
          index:0,text:'',importance:'',endDate:''
        });
        setTodoList([...auxList]);
      }else{
        setTodoList([...todoList,
        {
          id:givenId,
          text:todoText,
          importance:todoPriority,
          completed:false,
          endDate:todoDate
        }
        ]);
        setTodosNumber(todosNumber+1);
      }
      setAlertForm(true);
    }else{
      setCorrectdates(false);
    }
  };

  return (
    <form className="flex flex-col items-start shadow-lg bg-white p-5
    rounded-lg"
    onSubmit={handleSubmit}>
      <TitleCard
      text={!edit ? "Nueva Tarea" : "Editar Tarea"}
      />
      {!correctDates && (
        <ErrorForm/>
      )}
      {
        REQUERIMIENTOS_FORMULARIO.map(instruction => (
          <QuestionForm
          key={instruction.instruccion}
          instruccion={instruction.instruccion}
          placeHolder={instruction.placeHolder}
          valueState={instruction.valueState}
          actualizarValor={instruction.actualizarValor}
          tipo={instruction.tipo}
          />
        ))
      }
      <ButtonsForm
      setModal={setModal}
      edit={edit}
      />
    </form>
  );
};