export const QuestionForm = (
  {instruccion,placeHolder,valueState,actualizarValor,tipo}) => {
  return (
    <div key={instruccion}>
      <label className="font-bold">
        {instruccion}
      </label>
      <input 
      className={`border-2 w-full mt-1 outline-none mb-3 rounded-lg
      p-1 ${tipo==='date' && "-top-full relative"}`}
      type={tipo}
      value={valueState}
      placeholder={placeHolder}
      onChange={(evento) => actualizarValor(evento.target.value)}
      />
    </div>
  );
};
