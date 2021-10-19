import { changeDataReducer } from "../action";

const Single = (props) => {
  return (
    <div className="row">
      <div className="col-4"> {props.id} = </div>
      <div className="col-4">
        <input
          type="number"
          id={props.id}
          value={props.val}
          onChange={(e) => {
            props.dispatch(changeDataReducer(e, props.case_id));
          }}
        />
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default Single;
