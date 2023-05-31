import { TextDate } from "./TextDate";

export const ListTextDate = ({ARRAY_PROPS}) => {

  return (
    <>
    {ARRAY_PROPS.map(element => (
      <TextDate
      key={element.word}
      contentOne={element.word}
      contentTwo={element.item}
      />
    ))}
    </>
  );
};
