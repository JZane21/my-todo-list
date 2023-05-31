import { useState,useEffect } from "react";

export const TodoList = ({children,todosNumber}) => {

  const [width,setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  },[window.innerWidth,window.innerHeight]);


  return (
    <section className={`
    p-1
    h-todo-list
    overflow-auto
    ${(width<800) && 'flex flex-col'}
    ${(width>=800 && todosNumber>=2) && 'grid grid-cols-2'}
    `}>
      {children}
    </section>
  );
};
