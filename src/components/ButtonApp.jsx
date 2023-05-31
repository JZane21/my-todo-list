export const ButtonApp = ({textButton,typeButton,eventClick}) => {
  return (
    <button className="relative rounded-lg p-2 m-2 cursor-pointer 
      uppercase bg-purple-500 text-white font-bold
      hover:bg-purple-400 active:bg-purple-700"
      onClick={eventClick} type={typeButton}>
      {textButton}
    </button>
  );
};
