import { BsCheckLg } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

export const TodoButton = ({tipo,accion}) => {
  return (
    <button className="p-1 m-1 rounded-full hover:bg-purple-300 text-black
    hover:text-white active:bg-purple-500"
    onClick={accion}>
      {tipo==="check" && (<BsCheckLg/>)}
      {tipo==="delete" && (<AiFillDelete/>)}
      {tipo==="edit" && (<FiEdit/>)}
    </button>
  );
};
