import { useRef } from "react";

const TodoCheck: React.FC<{ onChecked: (isCheck: boolean) => void }> = (
  props
) => {
  const checkRef = useRef<HTMLInputElement>(null);

  const checkListner = () => {
    const isChecked = checkRef.current!.checked;

    props.onChecked(isChecked);
  };

  return <input type="checkbox" ref={checkRef} onChange={checkListner} />;
};

export default TodoCheck;
