import { useSelector } from "react-redux";
const Cases = (props) => {
  const store = useSelector((store) => store);
  return (
    <>
      {store.map((c) => {
        return (
          <button
            onClick={(e) => props.handleClick(e.target.value)}
            key={c.id}
            value={c.id}
          >
            {c.desc}
          </button>
        );
      })}
    </>
  );
};

export default Cases;
