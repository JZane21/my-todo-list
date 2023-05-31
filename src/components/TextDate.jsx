export const TextDate = ({contentOne,contentTwo}) => {
  return (
    <p className="ml-3 text-base text-black font-mono">
      {contentOne}
      <span className="font-semibold">{contentTwo}</span>
    </p>
  );
};
