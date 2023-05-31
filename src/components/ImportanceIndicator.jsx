import { BsCircle } from "react-icons/bs";

export const ImportanceIndicator = ({importance}) => {
  return (
    <>
      <BsCircle className={`
      ${(importance>=1 && importance<4) && "bg-green-400"}
      ${(importance>=4 && importance<8) && "bg-orange-400"}
      ${(importance>=8 && importance<=10) && "bg-red-400"}
      p-1 m-1 rounded-full`}/>
    </>
  );
};
