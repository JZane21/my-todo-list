import { GrFormAdd } from 'react-icons/gr'

export const AddButton = ({setModal,setEdit,setEditTodo}) => {

  const selectButton = () => {
    setModal(true);
    setEdit(false);
    setEditTodo({
      index:0,text:'',importance:'',endDate:''
    });
  };

  return (
    <button className="fixed bottom-0 right-0 bg-purple-500
    p-2 rounded-full text-white m-3 shadow-xl hover:bg-purple-400
    active:bg-purple-600"
    onClick={selectButton}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor" 
      className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  );
};
